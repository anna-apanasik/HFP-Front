import {Component, Input} from "@angular/core";
import {Step} from "../../../model/Step";

@Component({
  selector: 'app-view-step',
  templateUrl: './viewStep.component.html',
  styleUrls: ['./viewStep.component.css']
})

export class ViewStepComponent {
  @Input() public step: Step;
constructor(step: Step) {
  console.log('constr');
  console.log(this.step)
  this.step = step;

}
}
