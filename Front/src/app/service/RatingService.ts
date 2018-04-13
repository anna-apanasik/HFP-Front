import {Injectable} from "@angular/core";
import {CoreService} from "./coreService";
import {AuthConfigConsts, AuthHttp} from "angular2-jwt";
import {Http, Headers} from "@angular/http";
import {Rating} from "../model/Rating";

@Injectable()
export class RatingService extends CoreService {

  headers : Headers = new Headers();
  constructor(private http: Http,
              private authHttp: AuthHttp) {
    super();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));

  }

  getRating(id: number) {
    return this.authHttp
      .get(`${this.webService}getRating/` + id).map(res => {
        return res.json()});
  }

  updateRating(rating: Rating) {

    return this.authHttp
      .post(`${this.webService}rating/`,
        {
          userId: rating.userId,
          instructionId: rating.instructionId,
          value: rating.userValue
        },
        {headers: this.headers}).map(res => {
          let temp = res.json();
          rating.id = temp.id ;
          rating.userId = temp.userId;
          rating.instructionId = temp.instructionId ;
          rating.value = temp.value;
          return rating;
        }
      );
  }
}
