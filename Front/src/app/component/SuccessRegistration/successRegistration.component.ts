import {Component} from "@angular/core";
import {AuthenticationService} from "../../service/AuthentificationService";

@Component({
  selector:'app-success-register',
  templateUrl:'./successRegistration.component.html',
  styleUrls:['./successRegistration.component.css'],
  providers: [AuthenticationService]
})

export class SuccessRegistrationComponent{
}
