import {Injectable} from '@angular/core';
import {CoreService} from './coreService';
import {User} from '../model/user';
import {Response, Headers, Http, RequestOptions} from '@angular/http';
import {AuthenticationService} from './AuthentificationService';
import {Observable} from 'rxjs/Observable';
import {AuthConfigConsts, AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/map';
import {MessageRequestDto} from "../model/MessageRequestDto";
import {CloudinaryComponent} from "../component/CloudinaryImageComponent/CloudinaryComponent";


@Injectable()
export class UserService extends CoreService {
  private user: User = new User();
  headers: Headers = new Headers();

  constructor(private http: Http,
              private authHttp: AuthHttp,
              private authentificationService: AuthenticationService) {
    super();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
  }

  register(user: User) {
    user.image = CloudinaryComponent.UNKNOWN_PROFILE_IMAGE;

    console.log("registration");
    return this.http
      .post(`${this.webService}registration`, user, {headers: this.headers})
      .map((response: Response) => response)
      .do(data => {
        location.href = '/';
      });
  }

  blocking(data: number[]) {
    console.log(JSON.stringify(data));
    return this.authHttp
      .post(`${this.webService}block`, JSON.stringify(data), {headers: this.headers})
      .map((response: Response) => response);
  }

  confirm(data: number[]) {
    console.log(JSON.stringify(data));
    return this.authHttp.post(`${this.webService}confirmButton`, JSON.stringify(data), {headers: this.headers})
      .map((response: Response) => response)
      .do(data => {
        location.href = "/profile";
      });
  }

  deleting(data: number[]) {
    console.log(JSON.stringify(data));
    return this.authHttp.post(`${this.webService}delete`, JSON.stringify(data), {headers: this.headers})
      .map((response: Response) => response);
  }

  sendConfirm(image: string, additionally: string) {
    let message = new MessageRequestDto();
    message.image = image;
    message.text = additionally;
    return this.http
      .post(`${this.webService}confirmProfile`, JSON.stringify(message), {headers: this.headers}).map((response: Response) => response);
  }

  updateProfile(user: User) {
    var data: any;
    data = localStorage.getItem("image");
    localStorage.removeItem("image");
    this.user = user;
    this.user.image = data;
    return this.authHttp
      .post(`${this.webService}update-user`, this.user, {headers: this.headers})
      .map((response: Response) => response)
      .do(data => {
        location.href = "/profile";
      });
  }

  getAll() {
    return this.authHttp
      .get(`${this.webService}getUsers`)
      .map(res => res.json());
  }

  getMessage() {
    return this.authHttp
      .get(`${this.webService}getMessage`, {headers: this.headers})
      .map(res => res.json());
  }

  deleteProfile(id: number) {
    return this.authHttp
      .delete(`${this.webService}deleteUser/` + id, {headers: this.headers})
      .map(res => res);
  }
}
