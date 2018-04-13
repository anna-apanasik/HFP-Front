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
      console.log(resp);
      for (let index in resp) {
        console.log(resp[index]);
        this.users[index] = resp[index];
      }
    });
  }

  blockedCheckbox(index: number) {
    if (this.blockedList.indexOf(index) != -1) {
      console.log("del " + index);
      this.blockedList.splice(this.blockedList.indexOf(index), 1);
    }
    else {
      console.log("add " + index);
      this.blockedList.push(index);
    }
  }

  blocked(choose: number) {
    this.blockedList.unshift(choose);
    console.log(this.blockedList);
    this.userService.blocking(this.blockedList).subscribe(data => {
      console.log(data);
    })
    this.blockedList.splice(0, 1);
  }
}
