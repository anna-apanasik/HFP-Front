import {Component} from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../service/userService";
import {FormGroup} from '@angular/forms';
import {ValidationData} from "../../../service/validationData";

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

  constructor(private userService: UserService, private validation: ValidationData) {
  }

  checkConfirmPassword() {
    return this.validation.checkConfirmPassword(this.user.password, this.passwordConfirm);
  }

  register() {
    this.userService.register(this.user)
      .subscribe(data => {
        },
        error => {
          console.log(this.errorMessage = error.json().message);
        })
  }
}
