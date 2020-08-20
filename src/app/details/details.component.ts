import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';
import { Plan } from '../plan';
import { Details } from '../details';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public newEvent: Details;
  public myDay: Plan;
  public eventsArray: Details[];
  public dayEvents: Details[]; // moja tablica
  public showEventsArray: Details[];

  constructor(private router: Router, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.newEvent = {hour: '', content: ''};
   // this.dayEvents = JSON.parse(localStorage.getItem('dayEvents'));
  }

  addEvent() {
    this.myDay = this.eventsService.returnDayWithName(); // moj dzien z nazwa
    this.newEvent = new Details('', ''); // !!!!!!!!!!
    this.eventsService.storeNewEvent(this.newEvent);
    this.eventsArray = this.eventsService.returnEventsArray();
    // this.eventsArray.push(this.newEvent);
    // this.dayEvents.push(this.newEvent);
    this.myDay.events = this.eventsArray;
    console.log('stan po dodaniu wydarzenia:', this.eventsArray);
    this.eventsService.addEvent(this.myDay).subscribe(day => {  console.log('day:', day); });
  }

  showEvents(): boolean {
    return true;
  }
}
