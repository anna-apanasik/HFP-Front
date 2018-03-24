import {Component, OnInit} from "@angular/core";
import {InstructionService} from "../../service/InstructionService";
import {Section} from "../../model/Section";

@Component({
  selector: 'app-main-page',
  templateUrl:'./mainPage.component.html',
  styleUrls: ['./mainPage.component.css']
})

export class MainPageComponent implements OnInit {
  protected sections: Section[];
  constructor(private instructionService: InstructionService) {

  }

  ngOnInit() {
    this.loadSections()
  }

  loadSections() {
    this.instructionService
      .getSections()
      .subscribe(res => {
        this.sections = res;
      })
  }
}
