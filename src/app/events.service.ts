import { Injectable, OnInit } from '@angular/core';
import { Plan } from './plan';
import { Details } from './details';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public daysArray: Plan[]; // tablica obiektow dni
  public day: Plan; // wybrany dzien
  public eventsArray: Details[];
  public indeks: number;
  public newEvent: Details;

  constructor(private http: HttpClient) {
    this.eventsArray = []; // pusta tablica wydarzen
    this.day = { selectedDay: '', events: [] }; // pusty obiekt z pusta tablica wydarzen
  }

  storeDayName(day: Plan) {

    this.day = day;
  }

  returnDayWithName() {
    return this.day;
  }
  storeEvents(dayEvents: Details[]) {
    this.eventsArray = dayEvents;
  }

  storeNewEvent(newEvent: Details) {
    this.newEvent = newEvent;
    this.eventsArray.push(this.newEvent);
  }

  returnEventsArray() {
    return this.eventsArray;
  }

  addEvent(myDay: Plan): Observable<Plan> {
    return this.http.post<Plan>('http://calendar-teacher.azurewebsites.net/events', myDay);
  }

  // this.indeks = this.daysArray.indexOf(this.day); // indeks zle dziala

  getEvents(year, month, day): Observable<Plan> {
    return this.http.get<Plan>('http://calendar-teacher.azurewebsites.net/events/byDate?year=' + year + '&month=' + month + '&day=' + day);
  }



}

