import { Component} from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../service/userService";
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent {
  protected user: User = new User();
  passwordConfirm: string;
  protected errorMessage: string;
  form: FormGroup;

  constructor(private userService: UserService) {}

  checkPasswordConfirm() {
    return this.user.password && this.passwordConfirm
      ? this.user.password !==  this.passwordConfirm
      : false;
  }

  register(data: any) {
    this.userService.register(this.user).subscribe(data => {
        console.log(data);
      },
      error => {
        console.log(this.errorMessage = error.json().message);
      })
  }
}
