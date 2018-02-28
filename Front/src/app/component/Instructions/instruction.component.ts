import {Component, NgModule, OnInit} from "@angular/core";
import {Instruction} from "../../model/Instruction";
import {User} from "../../model/user";
import {Step} from "../../model/Step";
import {Section} from "../../model/Section";
import {AuthGuard} from "../../service/guards/auth.guards";
import {EditorStepComponent} from "./Editor/editorStep.component";
import {InstructionService} from "../../service/InstructionService";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css'],
})

export class InstructionComponent implements OnInit{
  protected project: Instruction = new Instruction;
  user: User;
  tags: string[];
  position: number = 0;
  isDisabledButtonAdd: boolean = false;
  instruction: Instruction;
  steps: Step[] = [];
  step: Step = new Step;
  currentSection: Section;
  sections: Section[] = [new Section(1, 'IT'), new Section(2, 'Books')];

  constructor(private instructionService: InstructionService,
              protected authGuard: AuthGuard,
              private activatedRoute: ActivatedRoute) {
    // this.project.image = 'http://res.cloudinary.com/crowbanding/image/upload/v1505210950/azufvfotm2nypj55ebnm.png';
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.instruction = new Instruction();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.instruction.id = params['id'];
    });
    this.getSection();
    this.loadInstruction();
  }

  saveInstruction() {

    this.instruction.steps = this.steps;
    //this.instruction.section = this.currentSection;
    this.instructionService.createInstruction(this.instruction).subscribe(resp => console.log(resp))
    //console.log(this.instruction);
  }

  public receiveStep(data) {
    data.position = this.steps.length + 1;
    this.steps.push(data);
    console.log(this.steps)
  }

  loadInstruction() {
    // if(this.instruction.id.toString() !== 'create') {
    //   this.instructionService.getInstruction(this.instruction.id).subscribe( res => {
    //     this.instruction = res;
    //     this.steps = this.instruction.steps;
    //   })
    // }

    // this.instruction = new Instruction();
    // this.instruction.id = 1;
    // this.instruction.title = 'pisdato';
    // this.instruction.section = new Section();
    // this.instruction.steps = this.steps;
  }

  getSection() {
    this.instructionService
      .getSections()
      .subscribe(sections => this.sections = sections);
  }

  getSteps(instructionId: number) {
    this.instructionService
      .getSteps(instructionId)
      .subscribe( steps => this.steps = steps);
  }
}
