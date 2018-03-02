import {Injectable} from "@angular/core";
import {UserService} from "./userService";

@Injectable()
export class ValidationData {

  checkConfirmPassword(password, confirmPassword) {
    return password && confirmPassword
      ? password === confirmPassword
      : false;
  }
}
