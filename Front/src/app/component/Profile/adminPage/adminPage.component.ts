import {Component, OnInit} from "@angular/core";
import {User} from "../../../model/user";
import {UserService} from "../../../service/userService";


@Component({
  selector: 'app-adminPage',
  templateUrl: './adminPage.component.html',
  styleUrls: ['./adminPage.component.css']
})

export class AdminPageComponent implements OnInit {
  users: User[] = [];
  block: boolean;
  blockedList: number[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAll().subscribe((resp: Response) => {
      for (let index in resp) {
        this.users[index] = resp[index];
      }
    });
  }

  blockedCheckbox(index: number) {
    if (this.blockedList.indexOf(index) != -1) {
      this.blockedList.splice(this.blockedList.indexOf(index), 1);
    }
    else {
      this.blockedList.push(index);
    }
  }

  blocked(choose: number) {
    this.blockedList.unshift(choose);
    this.userService.blocking(this.blockedList).subscribe(data => {
    });
    this.blockedList.splice(0, 1);
  }
}
