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
  public dayEvents: Details[];
  public showEventsArray: Details[];

  constructor(private router: Router, private eventsService: EventsService) { }

  ngOnInit(): void {
     this.newEvent = {hour: '', content: ''};
     // localStorage.setItem('eventsArray', JSON.stringify(this.eventsArray));
     // this.eventsArray = JSON.parse(localStorage.getItem('eventsArray'));
  }

  addEvent() {
    this.myDay = this.eventsService.returnDayWithName();
    let ev = new Details(this.newEvent.hour, this.newEvent.content); // trzeba pozbyc sie dodawania "" po pierwszym CLICK
    this.eventsService.storeNewEvent(ev);
    this.eventsArray = this.eventsService.returnEventsArray();
    this.myDay.events = this.eventsArray;
    console.log('Day events:', this.eventsArray);
    this.eventsService.addEvent(this.myDay).subscribe(day => {  console.log('day:', day); });
  }

  showEvents(): boolean {
    // this.showEventsArray = JSON.parse(localStorage.getItem('eventsArray'));
    this.eventsArray = this.eventsService.returnEventsArray();
    return true;
  }

  remove(dayEvent: Details) {
    this.myDay = this.eventsService.returnDayWithName();
    this.eventsService.removeEvent(dayEvent);
    this.eventsArray = this.eventsService.returnEventsArray();
    this.myDay.events = this.eventsArray;
    this.eventsService.addEvent(this.myDay).subscribe(day => {  console.log('day:', day); });
  }

  edit(dayEvent: Details) {
    this.eventsService.editEvent(dayEvent);
  }

}
