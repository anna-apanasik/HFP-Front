import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {InstructionService} from "../../../service/InstructionService";
import {Section} from "../../../model/Section";
import {Instruction} from "../../../model/Instruction";

@Component({
  selector: 'app-section',
  templateUrl:'./section.component.html',
  styleUrls: ['./section.component.css']
})

export class SectionComponent implements OnInit {
  protected section: Section = new Section();
  protected instructions: Instruction [];
  protected emptySection: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private instructionService: InstructionService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.section.id = params['section'];
    });
    this.getSection();
    this.getInstructions()
  }

  getSection()  {
    this.instructionService
      .getSectionById(this.section.id)
      .subscribe(res => {
        this.section = res;
      })
  }

  getInstructions() {
    this.instructionService
      .getInstructionsOfSection(this.section.id)
      .subscribe(res => {
        this.instructions = res;
        this.emptySection = false;
      },
        error => {
        this.emptySection = true;
      })
  }

}
