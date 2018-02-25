import {Component, Input, OnInit, Optional, Output} from "@angular/core";
import {Step} from "../../../model/Step";
import {Instruction} from "../../../model/Instruction";
import {ActivatedRoute} from "@angular/router";
import {InstructionService} from "../../../service/InstructionService";
import {Section} from "../../../model/Section";

@Component({
  selector: 'app-list-step',
  templateUrl: './listStep.component.html',
  styleUrls: ['./listStep.component.css']
})

export class ListStepComponent implements OnInit{

  instruction: Instruction = new Instruction();
  steps: Step[];

  constructor(private route: ActivatedRoute,private instructionService: InstructionService ,@Optional() steps: Step[]) {
    console.log('constr');
    //console.log(this.steps);
    //console.log(this.step)
    //this.steps = steps;
  }

  ngOnInit () {
    this.route.params.subscribe(params => {
      this.instruction.id = params['id']
    });

    this.loadInstruction();
  }

  loadInstruction() {
    // if(this.instruction.id.toString() !== 'create') {
    //   this.instructionService.getInstruction(this.instruction.id).subscribe( res => {
    //     this.instruction = res;
    //     this.steps = this.instruction.steps;
    //   })
    // }
    this.steps =  [new Step(1,'Step 1', 'first step'),
      new Step(2,'Step 2', 'second step'),
      new Step(3,'Step 3', 'thrid step')];

    this.instruction = new Instruction();
    this.instruction.id = 1;
    this.instruction.title = 'pisdato';
    this.instruction.section = new Section();
    this.instruction.steps = this.steps;
  }
}
