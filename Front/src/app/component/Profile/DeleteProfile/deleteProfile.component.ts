import {Component} from "@angular/core";
import {User} from "../../../model/user";
import {UserService} from "../../../service/userService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-profile',
  templateUrl: './deleteProfile.component.html',
  styleUrls: ['./deleteProfile.component.css']
})

export class DeleteProfileComponent {
  private user: User;
  constructor(private userService: UserService,
              private router: Router) {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  }

  deleteProfile() {
    this.userService
      .deleteProfile(this.user.id)
      .subscribe( res => {
        localStorage.removeItem("currentUser");
        localStorage.removeItem('token');
        this.router.navigate(['/'])
      })
  }
}
