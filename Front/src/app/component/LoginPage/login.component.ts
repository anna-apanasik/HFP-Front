import {Component} from '@angular/core';
import {LoginPageComponent} from "./Login/loginpage.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginPageComponent]

})
export class LoginComponent {

  constructor(private loginPage:LoginPageComponent){}
  activeLinkLogin: boolean = true;
  activeLinkRegister: boolean = false;

  changeActiveLogin(){
    this.activeLinkLogin = true;
    this.activeLinkRegister=false;
  }
  changeActiveRegister() {
    this.activeLinkRegister = true;
    this.activeLinkLogin = false;
  }
}
