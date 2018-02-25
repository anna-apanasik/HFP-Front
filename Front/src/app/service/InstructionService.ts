import {Injectable} from "@angular/core";
import {CoreService} from "./coreService";
import {AuthHttp} from "angular2-jwt";
import {Http} from "@angular/http";
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

  createInstruction() {
    return this.authHttp.post(`${this.webService}createInstruction`, Instruction).map(res => res.json());
  }

  updateInstruction() {
    return this.authHttp.put(`${this.webService}updateInstruction`, Instruction).map(res => res.json());
  }


}
