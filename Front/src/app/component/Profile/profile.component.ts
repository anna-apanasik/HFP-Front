import { Component} from "@angular/core";
import {AuthGuard} from "../../service/guards/auth.guards";
import { ComponentRef } from '@angular/core';
import {Router} from "@angular/router";
import {InstructionService} from "../../service/InstructionService";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class profileComponent {
  constructor( protected authGuard: AuthGuard) {
  }
}
