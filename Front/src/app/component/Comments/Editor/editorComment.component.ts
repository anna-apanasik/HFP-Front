import {Component, Input, OnInit} from "@angular/core";
import {User} from "../../../model/user";
import {Comment} from "../../../model/Comment";
import {CloudinaryComponent} from "../../CloudinaryImageComponent/CloudinaryComponent";
import {CommentService} from "../../../service/CommentService";
import {ActivatedRoute, Params} from "@angular/router";

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

  private instructionId: number = null;
  protected userImage: string;
  private testComment: Comment = new Comment(1, 31, JSON.parse(localStorage.getItem("currentUser")), 'omg');

  constructor(private activatedRoute: ActivatedRoute,
              private commentService: CommentService) {
    // this.user = JSON.parse(localStorage.getItem("currentUser"));
    // this.user.image = localStorage.getItem("image") || CloudinaryComponent.UNKNOWN_PROFILE_IMAGE;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.instructionId = params['id'];
    });

    if(this.edit) {
      this.getUser()
    }

    this.userImage = this.comment.user.image || CloudinaryComponent.UNKNOWN_PROFILE_IMAGE;
  }

  getUser() {
    this.comment.user = JSON.parse(localStorage.getItem("currentUser"));
  }

  onSave() {
    // TODO check user
    this.comment.idInstruction = this.instructionId;
    console.log(this.comment);

    this.commentService
      .createComment(this.comment)
      .subscribe( res => {
        console.log(res)
      });
  }

  onUpdate() {
    this.commentService
      .updateComment(this.comment)
      .subscribe(res => {
        console.log(res)
      });
  }

  onDelete() {
    this.commentService
      .deleteComment(this.comment.id)
      .subscribe(res => {
        console.log(res)
      });
  }
}
