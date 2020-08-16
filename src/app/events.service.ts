import { Injectable, OnInit } from '@angular/core';
import { Plan } from './plan';
import { Details } from './details';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public daysArray: Plan[]; // tablica obiektow dni
  public day: Plan; // wybrany dzien
  public eventsArray: Details[];
  public indeks: number;
  public dayName: string;

  constructor() {
    this.daysArray = []; // pusta tablica dni
    this.eventsArray = []; // pusta tablica wydarzen
    this.day = {selectedDay: '', events: []}; // pusty obiekt z pusta tablica wydarzen
  }

  storeDayName(dayName: string) {
    this.dayName = dayName; // nazwa wybranego dnia
    this.day.selectedDay = this.dayName; // teraz nazwa mojego dnia jest taka jak wybrana
    // this.daysArray[indeks].selectedDay = this.dayName;
    this.daysArray.push(this.day); // dodaj ten dzien do tablicy dni
    console.log(this.daysArray);
  }

  storeNewEvent(newEvent: Details) {
    let indeks = this.daysArray.indexOf(this.day);
    // this.daysArray[indeks].events == this.eventsArray;
    this.daysArray[indeks].events.push(newEvent);
    
    
  }

}






[12, 5, 8, 130, 44]

  /* storeData(daysArray, eventsArray, day) {
    this.daysArray = daysArray;
    this.eventsArray = eventsArray;
    this.day = day;
  }

  returnDaysArray() {
    return this.daysArray;
  }

  returnEventsArray() {
    return this.eventsArray;
  }

  returnDayObject() {
    return this.day;
  }

  getIndeks(indeks: number) {
    this.indeks = indeks;
  }

  returnIndeks() {
    return this.indeks;
  } */


