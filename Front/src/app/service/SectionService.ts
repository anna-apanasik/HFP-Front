import {Injectable} from "@angular/core";
import {AuthConfigConsts, AuthHttp} from "angular2-jwt";
import {CoreService} from "./coreService";
import {Headers, Http} from "@angular/http";
import {Section} from "../model/Section";

@Injectable()
export class SectionService extends CoreService {

  headers: Headers = new Headers();

  constructor(private http: Http,
              private authHttp: AuthHttp) {
    super();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
  }

  getSections() {
    return this.authHttp.get(`${this.webService}getSections`).map(res => res.json());
  }

  getAllUserInstruction(id: number, limit: number = null) {
    return this.authHttp
      .get(`${this.webService}userInstructions/` + id + `${ limit ? '/limit=' + limit : '' }`,{headers: this.headers})
      .map(res => res.json());
  }

  getSectionById(id: number) {
    return this.authHttp
      .get(`${this.webService}getSection/` + id)
      .map(res => res.json())
  }

  getInstructionsOfSection(id: number) {
    return this.authHttp
      .get(`${this.webService}instructionsOfSection/` + id)
      .map(res => res.json())
  }

  createSection(section: Section) {
    return this.authHttp
      .post(`${this.webService}createSection`, section,{ headers: this.headers })
      .map(res => res.json)
  }
}
