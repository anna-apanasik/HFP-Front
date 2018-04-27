import { Injectable } from '@angular/core';

@Injectable()

export class Rating {
  id: number;
  userValue: number;
  userId: number;
  instructionId: number;
  value: number;
}
