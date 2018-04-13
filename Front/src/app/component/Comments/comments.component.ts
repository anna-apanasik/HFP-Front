import {Component, OnInit} from "@angular/core";
import {User} from "../../model/user";
import {Comment} from "../../model/Comment";
import {ActivatedRoute, Params} from "@angular/router";
import {CommentService} from "../../service/CommentService";

@Component({
  selector: "app-comments",
  templateUrl: "comments.component.html",
  styleUrls: []
})

export class CommentsComponent implements OnInit {
  protected user: User;
  private instructionId: number;
  protected isAuthenticatedUser: boolean = false;
  protected comments: Comment[];

  constructor(private activatedRoute: ActivatedRoute,
              private commentService: CommentService) {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    if(this.user) {
      this.isAuthenticatedUser = true;
    }

    this.activatedRoute.params.subscribe((params: Params) => {
      this.instructionId = params['id'];
    });
  }

  ngOnInit() {
    this.getComments()
  }

  getComments() {
    this.commentService
      .getComments(this.instructionId)
      .subscribe( res => {
        this.comments = res;
      });
  }
}
