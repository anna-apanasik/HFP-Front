import {Injectable} from "@angular/core";
import {User} from "./user";

@Injectable()
export class Comment {
  id: number;
  idInstruction: number;
  user: User;
  text: string;

  constructor(id = null,idInstruction = null, user = null, text = null) {
    this.id = id;
    this.idInstruction = idInstruction;
    this.user = user;
    this.text = text;
  }
}
