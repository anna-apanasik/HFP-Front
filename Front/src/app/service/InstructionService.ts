import {Injectable} from "@angular/core";
import {CoreService} from "./coreService";
import {AuthConfigConsts, AuthHttp} from "angular2-jwt";
import {Http, Headers} from "@angular/http";
import {Instruction} from "../model/Instruction";
import {Step} from "../model/Step";

@Injectable()
export class InstructionService extends CoreService {

  headers : Headers = new Headers();
  constructor(private http: Http,
              private authHttp: AuthHttp) {
    super();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));

  }

  getInstruction(id: number) {
    return this.authHttp
      .get(`${this.webService}getInstruction/` + id).map(res => res.json());
  }

  createInstruction(instruction: Instruction) {
    return this.authHttp
      .post(`${this.webService}createInstruction`, instruction, {headers: this.headers}).map(res => res.json());
  }

  updateInstruction(instruction: Instruction) {
    return this.authHttp
      .put(`${this.webService}updateInstruction/`+ instruction.id, instruction,{headers: this.headers}).map(res => res.json());
  }

  deleteInstruction(instruction: Instruction) {
    return this.authHttp
      .delete(`${this.webService}deleteInstruction/` + instruction.id, {headers: this.headers}).map(res => res);
  }

  getSteps(id: number) {
    return this.authHttp
      .get(`${this.webService}getSteps`, id).map(res => res.json());
  }

  createStep(step: Step) {
    return this.authHttp
      .post(`${this.webService}createStep`, step, {headers: this.headers}).map(res => res.json());
  }

  updateStep(step: Step) {
    return this.authHttp.put(`${this.webService}updateStep/` + step.id, step, {headers: this.headers}).map(res => res.json());
  }

  deleteStep(step: Step) {
    return this.authHttp.delete(`${this.webService}deleteStep/` + step.id,{headers: this.headers}).map(res => res);
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
}
