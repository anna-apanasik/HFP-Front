import {Component, NgModule} from "@angular/core";
import {Instruction} from "../../model/Instruction";
import {User} from "../../model/user";
import {Step} from "../../model/Step";
import {Section} from "../../model/Section";
import {ProjectService} from "../../service/projectService";
import {AuthGuard} from "../../service/guards/auth.guards";
import {ListStepComponent} from "./List/listStep.component";
import {EditorStepComponent} from "./Editor/editorStep.component";

// @NgModule({
//   imports:[ListStepComponent, EditorStepComponent]
// })

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
})

export class InstructionComponent {
  protected project: Instruction = new Instruction;
  user: User;
  tags: string[];
  position: number = 0;
  isDisabledButtonAdd: boolean = false;
  // steps: Step[] = [];
  // newStep: Step = new Step();
  currentTopic: Section = new Section();
  topics: Section[] = [new Section(1,'IT'), new Section(2,'Books')];

  constructor(private projectService: ProjectService,
              protected authGuard: AuthGuard) {
    // this.project.image = 'http://res.cloudinary.com/crowbanding/image/upload/v1505210950/azufvfotm2nypj55ebnm.png';
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  }

}
