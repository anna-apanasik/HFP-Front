import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Instruction} from "../../../model/Instruction";
import {AuthGuard} from "../../../service/guards/auth.guards";
import {Step} from "../../../model/Step";


@Component({
  selector: 'app-editor-step',
  templateUrl: './editorStep.component.html',
  styleUrls: ['./editorStep.component.css']
})

export class EditorStepComponent {
  protected project: Instruction = new Instruction;
  protected images: string[] = [];

  @Input() step: Step = new Step();
  @Input() edit: boolean;
  @Input() isStory: boolean;
  @Output() newStepEvent = new EventEmitter();
  @Output() deleteStepEvent = new EventEmitter();
  buttonEdit: boolean = false;
  tags: string[];
  position: number = 0;

  constructor(protected authGuard: AuthGuard) {
  }

  addStep(step) {
    let copy = Object.assign({}, step);

    if(!this.buttonEdit || step.id) {
      this.newStepEvent.emit(copy);
    }

    if(!this.buttonEdit && step.id) {
      this.edit = !this.edit;
    }

    if(!this.buttonEdit && !step.id) {
      this.step.clearStep();
    }

    if(this.buttonEdit) {
      this.buttonEdit = !this.buttonEdit;
      this.edit = !this.edit;
    }
  }

  deleteStep(step) {
    if(this.edit && !step.id && !this.buttonEdit) {
      this.step.clearStep();
      return;
    }

    let copy = Object.assign({},step);
    this.deleteStepEvent.emit(copy);
  }

  updateImg(value: any, step) {
    this.images.push('http://res.cloudinary.com/crowbanding/image/upload/v1505169254/' + value + '.jpg');
  }
}
