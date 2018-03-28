import {Component, OnInit} from "@angular/core";
import {Section} from "../../model/Section";
import {SectionService} from "../../service/SectionService";

@Component({
  selector: 'app-main-page',
  templateUrl:'./mainPage.component.html',
  styleUrls: ['./mainPage.component.css']
})

export class MainPageComponent implements OnInit {
  protected sections: Section[];
  constructor(private sectionService: SectionService) {

  }

  ngOnInit() {
    this.loadSections()
  }

  loadSections() {
    this.sectionService
      .getSections()
      .subscribe(res => {
        this.sections = res;
      })
  }
}
