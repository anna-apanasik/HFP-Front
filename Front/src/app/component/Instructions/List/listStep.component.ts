import {Component, Input} from "@angular/core";
import {Step} from "../../../model/Step";

@Component({
  selector: 'app-list-step',
  templateUrl: './listStep.component.html',
  styleUrls: ['./listStep.component.css']
})

export class ListStepComponent {
  @Input()
  public step: Step;
  @Input() steps: Step[];

constructor(steps: Step[]) {
  console.log('constr');
  console.log(this.steps);
  console.log(this.step)
  this.steps = steps;

}
}
