import { Component} from "@angular/core";
import {User} from "../../../model/user";

@Component({
  selector: 'app-info-profile',
  templateUrl: './infoProfile.component.html',
  styleUrls: ['./infoProfile.component.css']
})

export class InfoProfileComponent {
  protected user: User;

  constructor()
  {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  }
}
