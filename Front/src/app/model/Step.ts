import {Injectable} from "@angular/core";

@Injectable()
export class Step {
  id: number;
  position: number;
  name: string;
  text: string;
  image: string[];

  instructionId: number;

  constructor(position = null, name = null, text = null, image = null) {
    this.position = position;
    this.name = name;
    this.text = text;
    this.image = image;
  }
  clearStep() {
    this.id = 0;
    this.position = 0;
    this.name = '';
    this.text = '';
    this.image = [];
  }
}
