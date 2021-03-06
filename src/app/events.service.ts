import { Injectable, OnInit } from '@angular/core';
import { Plan } from './plan';
import { Details } from './details';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public daysArray: Plan[];
  public day: Plan;
  public eventsArray: Details[];
  public indeks: number;
  public newEvent: Details;
  public myEditEvent: Details;

  constructor(private http: HttpClient) {
    this.eventsArray = [];
    this.day = { selectedDay: '', events: [] };
    this.myEditEvent = {hour: '', content: ''};
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

  getEvents(year, month, day): Observable<Plan> {
    return this.http.get<Plan>('http://calendar-teacher.azurewebsites.net/events/byDate?year=' + year + '&month=' + month + '&day=' + day);
  }

  removeEvent(dayEvent: Details) {
    this.eventsArray = this.eventsArray.filter(x => x !== dayEvent);
  }

  editEvent(dayEvent: Details) {
    this.myEditEvent = dayEvent;
  }

  returnEditEvent() {
    return this.myEditEvent;
  }

  compareEvents(updatedEvent: Details) {
      const EventToUpdate = this.eventsArray.find(this.findIndexToUpdate);
      const index = this.eventsArray.indexOf(EventToUpdate);
      this.eventsArray[index] = updatedEvent;
    }

  findIndexToUpdate(updatedEvent) {
    return updatedEvent.content === this;
  }


}

