import {Injectable} from "@angular/core";
import {CoreService} from "./coreService";
import {AuthHttp} from "angular2-jwt";
import {Http} from "@angular/http";

@Injectable()
export class InstructionService extends CoreService {
  constructor(private http: Http,
              private authHttp: AuthHttp) {
    super();
  }

  getSections() {
    return this.authHttp.get(`${this.webService}getSections`).map(res => res.json());
  }

  getSteps(id: number) {
    return this.authHttp.get(`${this.webService}getSteps`, id).map(res => res.json());
  }

}
