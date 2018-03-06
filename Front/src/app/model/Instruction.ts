import {Injectable} from "@angular/core";
import {Step} from "./Step"
import {Section} from "./Section";

@Injectable()
export class Instruction {
  id: number;
  title: string;
  rating: number;
  tags: string[];
  userId: number;
  steps: Step[];
  section: Section;

  constructor() {
    this.section = new Section();
    /*TODO delete default value for rating*/
    this.rating = 0;
  }
}

export class Project {
  idproject: number;
  name: string;
  image: string;
  rating: number;
  tags: string[];
  user: number;
  steps: Step[];
  section: Section;
}
