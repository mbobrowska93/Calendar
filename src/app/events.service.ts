import { Injectable, OnInit } from '@angular/core';
import { Plan } from './plan';
import { Details } from './details';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public daysArray: Plan[]; // tablica obiektow dni
  public myDay: Plan; // wybrany dzien
  public eventsArray: Details[];

  constructor() { }

  makeOurArray(newEvent: Details, name: string) {
    console.log('Wybrany dzien:', name);
    this.eventsArray = new Array (newEvent); // tworze tablice wydarzen
    // dodac warunek ze jak juz jest ...
    // this.myDay = {selectedDay: name, events: []};
    this.myDay = new Plan(name, this.eventsArray); // tworze nowy obiekt dnia z nazwa i tablica wydarzen 
    // dodac warunek ze jak juz jest ...

    this.daysArray = new Array(this.myDay); // tworze tablice dni
    console.log('Tablica dni:', this.daysArray);
    let index = this.daysArray.indexOf(this.myDay);
    this.daysArray[index].events.push(newEvent);

  }

}