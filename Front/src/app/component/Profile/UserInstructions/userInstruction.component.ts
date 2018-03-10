import { Component} from "@angular/core";
import {InstructionService} from "../../../service/InstructionService";
import {User} from "../../../model/user";
import {Instruction} from "../../../model/Instruction";

@Component({
  selector: 'app-my-instructions',
  templateUrl: './userInstruction.component.html',
  styleUrls: ['./userInstruction.component.css']
})

export class UserInstructionComponent {
  private user: User;
  protected instructions: Instruction[];
  protected createInstruction: boolean = false;

  constructor(private instructionService: InstructionService,) {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    this.loadInstructions();
  }

  loadInstructions() {
    this.instructionService
      .getAllUserInstruction(this.user.id)
      .subscribe(res => {
          this.instructions = res;
          this.createInstruction = false;
        },
        error => {
          this.createInstruction = true;
        })
  }
}
