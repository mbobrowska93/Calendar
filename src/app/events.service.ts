import { Injectable, OnInit } from '@angular/core';
import { Plan } from './plan';
import { Details } from './details';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public daysArray: Plan[]; // tablica obiektow dni

  constructor() { }

  makeDaysArray(daysArray) {
    this.daysArray = daysArray;
  }

  makeOurArray(day: Plan,  newEvent: Details) {
    let index = this.daysArray.indexOf(day);
    this.daysArray[index].events.push(newEvent); // ERROR - EVENTS UNDEFINED !!!
  }

  returnDaysArray() {
    return this.daysArray; // zwraca tablice dni
  }

}
