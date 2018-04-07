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
import {SectionService} from "../../service/SectionService";
import {InstructionHelper} from "../../service/helpers/InstructionHelper";

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css'],
})

/*TODO add tags*/
export class InstructionComponent implements OnInit {
  user: User;
  tags: string [];
  position: number = 0;
  instruction: Instruction = new Instruction();
  steps: Step[] = [];
  step: Step = new Step;
  currentSection: Section = new Section();
  sections: Section[] = [];
  isStory: boolean;
  typeOfInstruction: string = 'Instruction';

  constructor(private instructionService: InstructionService,
              private stepService: StepService,
              protected authGuard: AuthGuard,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sectionService: SectionService) {
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
    // TODO add save images(array)
    this.instruction.tags = this.tags ? this.tags.map(e => e['value'] ? e['value'] : e) : [];

    if(this.instruction.id.toString() == 'create') {
      this.instruction.steps = this.steps;
      this.instruction.id = 0;
      this.instructionService.createInstruction(this.instruction)
        .subscribe(resp => {
          this.router.navigate(['/instruction', resp.id])
        });
      return;
    }

    this.instructionService.updateInstruction(this.instruction)
      .subscribe(resp => {
        this.instruction = resp;
        this.tags = this.instruction.tags;
        this.router.navigate(['/instruction', resp.id])
      });
  }

  deleteInstruction() {
    this.instructionService.deleteInstruction(this.instruction)
      .subscribe(resp => {
        this.router.navigate(['/profile']);
      });
  }

  public receiveNewStep(data) {
    this.step = data;
    if(this.step.id) {
      this.instructionService.updateStep(this.step).subscribe( resp => console.log('resp',resp));
      return;
    }

    this.step.position = this.steps.length + 1;
    this.step.instructionId = this.instruction.id;
    this.step.image = InstructionHelper.reformatArrayToString(this.step.arrayOfImages);
    if(this.instruction.id.toString() != 'create') {
      this.instructionService.createStep(this.step).subscribe( resp => this.steps.push(resp));
      return;
    }
    data.instructionId = 0;
    this.steps.push(data);
  }

  public deleteStep(data) {
    this.instructionService.deleteStep(data).subscribe(() => {
      this.steps = this.steps.filter(item => item.position != data.position);
      this.steps.map((item,i)=> item.position = i +1);
      this.instruction.steps = this.steps;
      this.instructionService.updateInstruction(this.instruction)
        .subscribe(resp => {
          this.instruction = resp;
          this.router.navigate(['/profile/instruction', resp.id])
        });
    })
  }

  loadInstruction() {
    if(this.instruction.id.toString() !== 'create') {
      this.instructionService.getInstruction(this.instruction.id).subscribe( res => {
        this.instruction = res;
        this.steps = this.instruction.steps;
        this.steps.forEach(e => {
          e.arrayOfImages = InstructionHelper.reformatStringToArray(e.image)
        });
        this.tags = this.instruction.tags;
      })
    }
  }

  getSection() {
    this.sectionService
      .getSections()
      .subscribe(sections => {
        this.sections = sections;
      })
  }

  getSteps(instructionId: number) {
    this.instructionService
      .getSteps(instructionId)
      .subscribe( steps => this.steps = steps);
  }

  switchType() {
    this.isStory ? this.typeOfInstruction = 'Instruction' :  this.typeOfInstruction = 'Story';
  }
}
