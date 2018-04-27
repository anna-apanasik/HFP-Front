import {Component} from "@angular/core";
import {UserService} from "../../../service/userService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirm-profile',
  templateUrl: './confirmProfile.component.html',
  styleUrls: ['./confirmProfile.component.css']
})

export class ConfirmProfileComponent {
  protected imagePasport: string;
  protected additionally: string;

  constructor(private userService: UserService, private router: Router,) {
    this.imagePasport = 'http://res.cloudinary.com/crowbanding/image/upload/v1505210950/azufvfotm2nypj55ebnm.png';
  }

  updateImg(value: any) {
    this.imagePasport = 'http://res.cloudinary.com/crowbanding/image/upload/v1505169254/' + value + '.jpg';
  }

  confirmProfile(y) {
    this.userService.sendConfirm(this.imagePasport, this.additionally);
    this.router.navigate(['/profile/'])
  }
}
