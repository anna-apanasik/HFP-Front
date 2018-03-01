import {Injectable} from "@angular/core";
import {CoreService} from "./coreService";
import {AuthConfigConsts, AuthHttp} from "angular2-jwt";
import {Http, Headers} from "@angular/http";
import {Instruction} from "../model/Instruction";

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

  getInstruction(id: number) {
    return this.authHttp.get(`${this.webService}getInstruction`, id).map(res => res.json());
  }

  createInstruction(instruction: Instruction) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));

    return this.authHttp.post(`${this.webService}createInstruction`, instruction, {headers}).map(res => res.json());
  }

  updateInstruction(instruction: Instruction) {
    return this.authHttp.put(`${this.webService}updateInstruction`, instruction).map(res => res.json());
  }


}
