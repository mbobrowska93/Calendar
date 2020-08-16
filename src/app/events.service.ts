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
    this.day = new Plan();
    this.day.selectedDay = dayName; // teraz nazwa mojego dnia jest taka jak wybrana
    this.daysArray.push(this.day); // dodaj ten dzien do tablicy dni // tu zamienia mi kazdy dzien na najnowszy
    console.log(this.day.selectedDay);
    console.log(this.daysArray); // OK - prawidlowo dodaje dni
  }

  storeNewEvent(newEvent: Details) {
    this.indeks = this.daysArray.indexOf(this.day);
    // this.daysArray[indeks].events == this.eventsArray;
    this.daysArray[this.indeks].events.push(newEvent);
    console.log(this.daysArray);
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


