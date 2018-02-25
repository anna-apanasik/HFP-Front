import {Injectable} from "@angular/core";

@Injectable()
export class Step {
  idStep: number;
  instructionId: number;
  positionInInstruction: number;
  nameOfStep: string;
  textInStep: string;
  image: string[];

  constructor(position = null, name = null, text = null, image = null) {
    this.positionInInstruction = position;
    this.nameOfStep = name;
    this.textInStep = text;
    this.image = image;
  }
  clearStep() {
    this.idStep = 0;
    this.positionInInstruction = 0;
    this.nameOfStep = '';
    this.textInStep = '';
    this.image = [];
  }
}
