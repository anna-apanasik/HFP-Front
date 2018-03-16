import {Component, NgModule, OnInit} from "@angular/core";
import {Instruction} from "../../model/Instruction";
import {User} from "../../model/user";
import {Step} from "../../model/Step";
import {Section} from "../../model/Section";
import {AuthGuard} from "../../service/guards/auth.guards";
import {EditorStepComponent} from "./Editor/editorStep.component";
import {InstructionService} from "../../service/InstructionService";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthConfigConsts} from "angular2-jwt";
import {UserService} from "../../service/userService";
import {StepService} from "../../service/StepService";

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
  instruction: Instruction = new Instruction();
  steps: Step[] = [];
  step: Step = new Step;
  currentSection: Section = new Section();
  sections: Section[] = [];

  constructor(private instructionService: InstructionService,
              private stepService: StepService,
              protected authGuard: AuthGuard,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    // this.project.image = 'http://res.cloudinary.com/crowbanding/image/upload/v1505210950/azufvfotm2nypj55ebnm.png';
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.instruction = new Instruction();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.instruction.id = params['id'];
    });
    this.instruction.userId = this.user.id;
    this.getSection();
    this.loadInstruction();
  }

  saveInstruction() {
    if(this.instruction.id.toString() == 'create') {
      this.instruction.steps = this.steps;
      this.instruction.id = 0;
      console.log(this.instruction)
      console.log(this.instruction.section)
      this.instructionService.createInstruction(this.instruction)
        .subscribe(resp => {
          this.instruction = resp;
          this.router.navigate(['/profile/instruction', resp.id])
        });
      return;
    }

    this.instructionService.updateInstruction(this.instruction)
      .subscribe(resp => {
        console.log(resp)
        this.instruction = resp;
        this.router.navigate(['/profile/instruction', resp.id])
      });
  }
  setSection(value) {
    console.log(value)
  }

  deleteInstruction() {
    this.instructionService.deleteInstruction(this.instruction)
      .subscribe(resp => {
        console.log('delete', resp)
        let id = 'create';
        //this.instruction.clear();
        this.router.navigate(['/profile/instruction',id])
      });
  }

  public receiveNewStep(data) {
    this.step = data;
    console.log('receive',this.step);
    if(this.step.id) {
      console.log('updateStep')
      this.instructionService.updateStep(this.step).subscribe( resp => console.log('resp',resp));
      return;
    }

    console.log('create')
    this.step.position = this.steps.length + 1;
    this.step.instructionId = this.instruction.id;
    if(this.instruction.id.toString() != 'create') {
      console.log('send step');
      this.instructionService.createStep(this.step).subscribe( resp => this.steps.push(resp));
      return;
    }
    data.instructionId = 0;
    this.steps.push(data);
  }

  public deleteStep(data) {
    this.instructionService.deleteStep(data).subscribe(() => {
      console.log('delete',data)
      this.steps = this.steps.filter(item => item.position != data.position);
      this.steps.map((item,i)=> item.position = i +1);
      this.instruction.steps = this.steps;
      this.instructionService.updateInstruction(this.instruction)
        .subscribe(resp => {
          console.log(resp)
          this.instruction = resp;
          this.router.navigate(['/profile/instruction', resp.id])
        });
    })
  }

  loadInstruction() {
    if(this.instruction.id.toString() !== 'create') {
      this.instructionService.getInstruction(this.instruction.id).subscribe( res => {
        console.log(res);
        this.instruction = res;
        this.steps = this.instruction.steps;
      })
    }
  }

  getSection() {
    //this.sections = [new Section(1,'It')]
    this.instructionService
      .getSections()
      .subscribe(sections => {
        console.log(sections)
        this.sections = sections;
      })
  }

  getSteps(instructionId: number) {
    this.instructionService
      .getSteps(instructionId)
      .subscribe( steps => this.steps = steps);
  }
}
