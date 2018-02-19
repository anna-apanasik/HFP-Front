import {Injectable} from "@angular/core";

@Injectable()
export class Step {
  idStep: number;
  positionInInstruction: number;
  nameOfStep: string;
  textInStep: string;
  image: string[];

  clearStep(){
    this.idStep = 0;
    this.positionInInstruction = 0;
    this.nameOfStep = '';
    this.textInStep = '';
    this.image = [];
  }
}
