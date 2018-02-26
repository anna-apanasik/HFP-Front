import {AuthHttp} from "angular2-jwt";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {CoreService} from "./coreService";
import {Step} from "../model/Step";

@Injectable()
export class StepService extends CoreService {
  constructor(private http: Http,
              private authHttp: AuthHttp) {
    super();
  }

  createStep() {
    return this.authHttp.post(`${this.webService}createStep`, Step).map(res => res.json());
  }

  updateStep() {
    return this.authHttp.put(`${this.webService}updateStep`, Step).map(res => res.json());
  }

  getSteps(id: number) {
    return this.authHttp.get(`${this.webService}getSteps`, id).map(res => res.json());
  }
}
