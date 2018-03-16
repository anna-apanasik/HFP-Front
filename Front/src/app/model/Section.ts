import { Injectable } from '@angular/core';

@Injectable()

export class Section {
  id: number;
  title: string;

  constructor( id: number = 0, title: string = '') {
    this.id = id;
    this.title = title;
  }
}
