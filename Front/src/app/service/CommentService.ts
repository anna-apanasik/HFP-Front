import {Injectable} from "@angular/core";
import {AuthConfigConsts, AuthHttp} from "angular2-jwt";
import {CoreService} from "./coreService";
import {Headers, Http, Response} from "@angular/http";
import {Comment} from "../model/Comment";

@Injectable()
export class CommentService extends CoreService {

  headers: Headers = new Headers();

  constructor(private http: Http,
              private authHttp: AuthHttp) {
    super();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
  }

  createComment(comment: Comment) {
    return this.authHttp
      .post(`${this.webService}createComment`, JSON.stringify(comment), {headers: this.headers})
      .map((response:Response) => response)
      // .do(() => {
      //   //location.href="view/project/" + comment.idproject;
      // });
  }

  getComments(instructionId: number) {
    return this.authHttp
      .get(`${ this.webService }getCommentsByInstructionId/` + instructionId)
      .map( res => res['_body'] ? res.json() : -1);
  }

  updateComment(comment: Comment) {
    return this.authHttp
      .post(`${ this.webService }updateComment/` + comment.id, comment, {headers: this.headers})
      .map(res => res.json())
  }

  deleteComment(commentId: number) {
    return this.authHttp
      .delete(`${ this.webService }deleteComment/` + commentId, {headers: this.headers})
      .map(res => res.json())
  }

}
