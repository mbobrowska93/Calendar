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

  constructor() { }

  przechowajDane(daysArray, eventsArray, day) {
    this.daysArray = daysArray;
    this.eventsArray = eventsArray;
    this.day = day;
  }

  returnTablicaDni() {
    return this.daysArray;
  }

  returnTablicaWydarzen() {
    return this.eventsArray;
  }

  returnObiektDnia() {
    return this.day;
  }

  getIndeks(indeks: number) {
    this.indeks = indeks;
  }

  returnIndeks() {
    return this.indeks;
  }

}
