import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Instruction} from "../../../model/Instruction";
import {User} from "../../../model/user";
import {InstructionService} from "../../../service/InstructionService";
import {InstructionHelper} from "../../../service/helpers/InstructionHelper";
import {RatingService} from "../../../service/RatingService";
import {Rating} from "../../../model/Rating";

@Component({
  selector: 'app-view-instruction',
  templateUrl: './viewInstruction.component.html',
  styleUrls: ['./viewInstruction.component.css'],
})

export class ViewInstructionComponent implements OnInit {
  protected user: User;
  protected instruction: Instruction = new Instruction();
  rating: Rating = new Rating();

  constructor(private activatedRoute: ActivatedRoute,
              private instructionService: InstructionService,
              private router: Router,
              private ratingService: RatingService) {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.instruction.id = params['id'];
    });
    this.loadInstruction();
    this.ratingService.getRating(this.instruction.id).subscribe(res =>
      this.rating.value = res
    )
  }

  loadInstruction() {
    this.instructionService
      .getInstruction(this.instruction.id)
      .subscribe(res => {
        console.log(res.steps)
        InstructionHelper.sortStepArrayByPosition(res.steps);
        this.instruction = res;
        console.log(this.instruction);
      })
  }

  deleteInstruction() {
    this.instructionService.deleteInstruction(this.instruction)
      .subscribe(resp => {
        location.href='/profile';
        /*TODO check router navigate*/
      });
  }

  editInstruction() {
    this.router.navigate(['/profile/instruction', this.instruction.id])
  }

  switched(tag: string){
    /* TODO search for tag */
    console.log('tag ', tag)
  }

  onRateChange(value){
    this.rating.userValue = value;
    this.rating.userId = this.user.id;
    this.rating.instructionId = this.instruction.id;
    this.ratingService.updateRating(this.rating).subscribe( res => {
        if (res.length > 7) {
          alert("Вы уже голосовали!");
        }
        location.href = 'instruction/' + this.instruction.id;
      }
    )
  }
}
