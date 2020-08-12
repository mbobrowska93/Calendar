import { Injectable } from '@angular/core';
import { Plan } from './plan';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public myEvent: Plan;
  constructor() { }

  makeObject(x: number, y: string, z: string) {
    this.myEvent = new Plan(x, y, z);
    console.log('moje wydarzenie:', this.myEvent);
  }

}
