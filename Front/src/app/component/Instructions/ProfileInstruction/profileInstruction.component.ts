import {Component, Input, OnInit} from "@angular/core";
import {Instruction} from "../../../model/Instruction";
import {InstructionService} from "../../../service/InstructionService";
import {Router} from "@angular/router";
import {RatingService} from "../../../service/RatingService";
import {Rating} from "../../../model/Rating";

@Component({
  selector: 'app-profile-instruction',
  templateUrl: './profileInstruction.component.html',
  styleUrls: ['./profileInstruction.component.css']
})

export class ProfileInstructionComponent implements OnInit{
  @Input() instruction: Instruction = new Instruction();
  @Input() isProfile: boolean;
  rating : Rating = new Rating();
  constructor(private instructionService: InstructionService,
              private router: Router,
              private ratingService: RatingService) {
  }

  ngOnInit() {
    this.ratingService.getRating(this.instruction.id).subscribe(res => {
      console.log('rating');
      console.log(res);
      this.rating.value = res;
    })
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
    this.rating.userValue = value;
    this.ratingService.updateRating(this.rating).subscribe(res => this.rating = res);
  }

  switched(tag: string){
    /*TODO search for tag*/
      console.log('tag ', tag)
/*
    location.href='/searcheResults/tag'+tag;
*/
  }

}
