import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Instruction} from "../../../model/Instruction";
import {User} from "../../../model/user";
import {InstructionService} from "../../../service/InstructionService";

@Component({
  selector: 'app-view-instruction',
  templateUrl: './viewInstruction.component.html',
  styleUrls: ['./viewInstruction.component.css'],
})

export class ViewInstructionComponent implements OnInit {
  private user: User;
  protected instruction: Instruction = new Instruction();

  constructor(private activatedRoute: ActivatedRoute,
              private instructionService: InstructionService) {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.instruction.id = params['id'];
    });
    this.loadInstruction();
  }

  loadInstruction() {
    this.instructionService
      .getInstruction(this.instruction.id)
      .subscribe(res => {
        this.instruction = res;
        console.log(this.instruction);
      })
  }

  switched(tag: string){
    /* TODO search for tag */
    console.log('tag ', tag)
  }
}
