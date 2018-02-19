import {Component} from "@angular/core";
import {selector} from "rxjs/operator/publish";
import {Instruction} from "../../../model/Instruction";
import {User} from "../../../model/user";
import {AuthGuard} from "../../../service/guards/auth.guards";
import {ProjectService} from "../../../service/projectService";
import {Step} from "../../../model/Step";
import {Section} from "../../../model/Section";


@Component({
  selector: 'app-instruction',
  templateUrl: './addInstruction.component.html',
  styleUrls: ['./addInstruction.component.css']
})

export class AddInstructionComponent {
  protected project: Instruction = new Instruction;
  user: User;
  tags: string[];
  position: number = 0;
  isDisabledButtonAdd: boolean = false;
  steps: Step[] = [];
  newStep: Step = new Step();
  currentTopic: Section = new Section();
  topics: Section[] = [new Section(1,'IT'), new Section(2,'Books')];

  constructor(private projectService: ProjectService,
              protected authGuard: AuthGuard) {
   // this.project.image = 'http://res.cloudinary.com/crowbanding/image/upload/v1505210950/azufvfotm2nypj55ebnm.png';
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  }

  addItem() {
    this.position++;
    console.log(this.position);
    this.isDisabledButtonAdd = this.changeStatus(this.isDisabledButtonAdd);
  }

  changeStatus(status: boolean) {
    return !status;
  }

  saveStep(step) {
    this.isDisabledButtonAdd = this.changeStatus(this.isDisabledButtonAdd);
    this.steps.push(step);
    console.log(this.newStep)
    console.log(step)
    console.log(this.steps)
    //this.newStep.clearStep();
  }

}
