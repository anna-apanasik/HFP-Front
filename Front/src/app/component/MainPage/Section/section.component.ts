import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {InstructionService} from "../../../service/InstructionService";
import {Section} from "../../../model/Section";
import {Instruction} from "../../../model/Instruction";
import {SectionService} from "../../../service/SectionService";

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
              private sectionService: SectionService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.section.id = params['id'];
    });
    this.getSection();
    this.getInstructions()
  }

  getSection()  {
    this.sectionService
      .getSectionById(this.section.id)
      .subscribe(res => {
        this.section = res;
      })
  }

  getInstructions() {
    this.sectionService
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
