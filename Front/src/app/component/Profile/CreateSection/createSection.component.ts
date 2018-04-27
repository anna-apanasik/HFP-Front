import {Component, OnInit} from "@angular/core";
import {SectionService} from "../../../service/SectionService";
import {Section} from "../../../model/Section";

@Component({
  selector: 'app-create-section',
  templateUrl: './createSection.component.html',
  styleUrls: ['./createSection.component.css']
})

export class CreateSectionComponent implements OnInit {

  protected sections: Section[];
  protected section: Section = new Section();
  protected errorMessage: string;

  constructor(private sectionService: SectionService) {
  }

  ngOnInit() {
    this.getAllSections();
  }

  getAllSections() {
    this.sectionService
      .getSections()
      .subscribe(res => {
        this.sections = res;
      })
  }

  saveSection() {
    this.sectionService
      .createSection(this.section)
      .subscribe(res => {
          this.errorMessage = '';
          this.section.title = '';
          this.getAllSections();
        },
        error => {
          this.errorMessage = error.json().message;
        });
  }

  deleteSection(section) {
  }
}
