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
    // tu dodac warunek ze jak juz jest ...
    if (this.daysArray == null ) { // OK
      this.daysArray = new Array(this.myDay); // tworze tablice dni
    } else
    console.log('Tablica dni:', this.daysArray);
    let index = this.daysArray.indexOf(this.myDay);
    this.daysArray[index].events.push(newEvent);
    // tego nam nie czyta poza ifem bo nie ma deklaracji tablicy, mimo wszystko trzeba ja gdzies zadeklarowac najpierw jako pusta 
    // moze gdzies przechowywac ta stworzona new Array i potem ja tu przywolac
  

  }

}