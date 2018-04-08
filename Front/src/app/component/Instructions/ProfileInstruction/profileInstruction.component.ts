import {Component, Input} from "@angular/core";
import {Instruction} from "../../../model/Instruction";
import {InstructionService} from "../../../service/InstructionService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-instruction',
  templateUrl: './profileInstruction.component.html',
  styleUrls: ['./profileInstruction.component.css']
})

export class ProfileInstructionComponent {
  @Input() instruction: Instruction = new Instruction();
  @Input() isProfile: boolean;
  rate : 5;
  constructor(private instructionService: InstructionService,
              private router: Router) {
  }

  deleteInstruction() {
    this.instructionService.deleteInstruction(this.instruction)
      .subscribe(resp => {
        if(location.pathname == '/profile/my-instructions') {
          location.href='/profile/my-instructions';
          return;
        }
        //this.router.navigate(['/profile']);
        location.href='/profile';
        /*TODO check router navigate*/
      });
  }

  editInstruction() {
    this.router.navigate(['/profile/instruction', this.instruction.id])
  }

  viewInstruction() {
    /*TODO check router navigate*/
    location.href = '/instruction/' + this.instruction.id;
  }

  onRateChange(value) {
    this.rate = value;
  }

  switched(tag: string){
    /*TODO search for tag*/
      console.log('tag ', tag)
/*
    location.href='/searcheResults/tag'+tag;
*/
  }

}
