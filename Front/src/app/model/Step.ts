import {Injectable} from "@angular/core";

@Injectable()
export class Step {
  id: number;
  position: number;
  name: string;
  text: string;
  image: string;
  arrayOfImages: string[];

  instructionId: number;

  constructor(position = null, name = null, text = null, image = null, arrayOfImages = []) {
    this.position = position;
    this.name = name;
    this.text = text;
    this.image = image;
    this.arrayOfImages = arrayOfImages;
  }

  clearStep() {
    this.id = 0;
    this.position = 0;
    this.name = '';
    this.text = '';
    this.image = '';
  }

  public setPosition(position: number) {
    this.position = position;
  }
}
