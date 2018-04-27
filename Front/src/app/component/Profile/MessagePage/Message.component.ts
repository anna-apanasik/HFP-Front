import {Component, OnInit} from "@angular/core";
import {UserService} from "../../../service/userService";
import {MessageRequestDto} from "../../../model/MessageRequestDto";

@Component({
  selector: 'app-message-component',
  templateUrl: './Message.component.html',
  styleUrls: ['./Message.component.css']
})

export class MessageComponent implements OnInit {
  protected messages: MessageRequestDto[] = [];
  blockedList: number[] = [];

  constructor(private userService: UserService) {
  }


  ngOnInit() {
    this.getMessages()
  }

  confirm(choose: number, id: number) {
    this.blockedList.unshift(choose);
    this.blockedList.push(id);
    this.userService.confirm(this.blockedList)
      .subscribe(() => {
        this.getMessages();
        this.blockedList.splice(0, 1);
      });

  }

  getMessages() {
    this.userService.getMessage()
      .subscribe((resp: Response) => {
        this.messages = [];
      for (let index in resp) {
        this.messages[index] = resp[index];
      }
    });
  }
}
