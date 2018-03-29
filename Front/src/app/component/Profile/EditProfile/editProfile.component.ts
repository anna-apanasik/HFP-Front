import {Component} from "@angular/core";
import {UserService} from "../../../service/userService";
import {User} from "../../../model/user";
import {ImageComponent} from "../../imageArea/image.component";
import {FormGroup} from "@angular/forms";
import {ValidationData} from "../../../service/validationData";
import {CloudinaryComponent} from "../../CloudinaryImageComponent/CloudinaryComponent";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './editProfile.component.html',
  styleUrls: ['./editProfile.component.css'],
  providers: [ImageComponent]
})

export class EditProfileComponent {
  protected user: User = new User();
  protected oldUser: User;

  protected firstName: string;
  protected lastName: string;
  protected email: string;
  protected login: string;
  protected password: string;
  protected confirmPassword: string;
  protected errorMessage: string;

  form: FormGroup;

  constructor(private userService: UserService,
              private imageComponent: ImageComponent,
              private validation: ValidationData) {
    this.user.image = localStorage.getItem("image") || CloudinaryComponent.UNKNOWM_PROFILE_IMAGE;
    this.oldUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  checkConfirmPassword() {
    return this.validation.checkConfirmPassword(this.password, this.confirmPassword);
  }

  checkEmptyFields() {
    return !this.firstName && !this.lastName && !this.email && !this.login && !this.password && !this.confirmPassword;
  }

  updateProfile() {
    this.user.id = this.oldUser.id;
    this.user.userName = this.login || this.oldUser.userName;
    this.user.firstName = this.firstName || this.oldUser.firstName;
    this.user.lastName = this.lastName || this.oldUser.lastName;
    this.user.password = this.password || this.oldUser.password;
    this.user.email = this.email || this.oldUser.email;

    this.userService.updateProfile(this.user)
      .subscribe(data => {
        localStorage.setItem("currentUser", JSON.stringify(data.json()));
      },
        error => {
          this.errorMessage =  error.json().message;
        });
  }

  updateImg(value: any) {
    this.user.image = 'http://res.cloudinary.com/crowbanding/image/upload/v1505169254/' + value + '.jpg';
    localStorage.setItem("image", this.user.image);
  }
}
