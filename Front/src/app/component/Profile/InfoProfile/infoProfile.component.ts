import { Component} from "@angular/core";
import {User} from "../../../model/user";
import {Instruction} from "../../../model/Instruction";
import {Section} from "../../../model/Section";
import {InstructionService} from "../../../service/InstructionService";
import {SectionService} from "../../../service/SectionService";

@Component({
  selector: 'app-info-profile',
  templateUrl: './infoProfile.component.html',
  styleUrls: ['./infoProfile.component.css']
})

export class InfoProfileComponent {
  protected user: User;
  protected instructions: Instruction[];
  protected createInstruction: boolean = false;

  constructor(private sectionService: SectionService,) {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    this.loadInstructions();
  }

  loadInstructions() {
    this.sectionService
      .getAllUserInstruction(this.user.id, 4)
      .subscribe(res => {
        this.instructions = res;
        this.createInstruction = false;
      },
        error => {
        this.createInstruction = true;
        })
  }
}
