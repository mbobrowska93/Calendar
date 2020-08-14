import { Injectable, OnInit } from '@angular/core';
import { Plan } from './plan';
import { Details } from './details';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public daysArray: Plan[]; // tablica obiektow dni
  public myDay: Plan; // wybrany dzien

  constructor() { }

  makeOurArray(newEvent: Details, name: string) {
    console.log('Wybrany dzien:', name);
    this.myDay = {selectedDay: name, events: []};
    this.daysArray = new Array(this.myDay); // tworze tablice dni nową
    console.log('Tablica dni:', this.daysArray);
    let index = this.daysArray.indexOf(this.myDay);
    this.daysArray[index].events.push(newEvent);
  }

}