import {AuthConfigConsts, AuthHttp} from "angular2-jwt";
import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {CoreService} from "./coreService";
import {Step} from "../model/Step";

@Injectable()
export class StepService extends CoreService {
    headers: Headers = new Headers();
  constructor(private http: Http,
              private authHttp: AuthHttp) {
    super();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
  }

  getSteps(id: number) {
    return this.authHttp.get(`${this.webService}getSteps`, id).map(res => res.json());
  }
}
