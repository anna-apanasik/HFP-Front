import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import {User} from "../../../model/user";
import {Comment} from "../../../model/Comment";
import {CloudinaryComponent} from "../../CloudinaryImageComponent/CloudinaryComponent";
import {CommentService} from "../../../service/CommentService";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: "app-editor-comment",
  templateUrl: "editorComment.component.html",
  styleUrls: ["editorComment.component.css"]
})

export class EditorCommentComponent implements OnInit {
  @Input() comment: Comment = new Comment();
  @Input() edit: boolean = false;
  @Input() isAuthenticatedUserComment: boolean = false;
  @Input() userId: number;

  @Output() updateCommentsEvent = new EventEmitter();

  private instructionId: number = null;
  protected userImage: string;

  constructor(private activatedRoute: ActivatedRoute,
              private commentService: CommentService,
              private router: Router) {
    // this.user = JSON.parse(localStorage.getItem("currentUser"));
    // this.user.image = localStorage.getItem("image") || CloudinaryComponent.UNKNOWN_PROFILE_IMAGE;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.instructionId = params['id'];
    });

    if (this.edit) {
      this.getUser()
    }

    this.userImage = this.comment.user.image || CloudinaryComponent.UNKNOWN_PROFILE_IMAGE;
  }

  getUser() {
    this.comment.user = JSON.parse(localStorage.getItem("currentUser"));
  }

  onSave() {
    this.comment.idInstruction = this.instructionId;

    this.commentService
      .createComment(this.comment)
      .subscribe(() => {
        this.updateCommentsEvent.emit();
        this.comment.text = '';
      });
  }

  onUpdate() {
    this.commentService
      .updateComment(this.comment)
      .subscribe(() => {
        this.edit = !this.edit;
        this.updateCommentsEvent.emit();
      });
  }

  onDelete() {
    this.commentService
      .deleteComment(this.comment.id)
      .subscribe(() => {
        this.updateCommentsEvent.emit();
      });
  }
}
