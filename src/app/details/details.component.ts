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

  constructor(private router: Router, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.newEvent = {hour: '', content: ''};
  }

  addEvent() {
    this.myDay = this.eventsService.returnDayWithName(); // moj dzien z nazwa
    this.newEvent = new Details('', ''); // !!!!!!!!!!
    this.eventsService.storeNewEvent(this.newEvent);
    this.eventsArray = this.eventsService.returnEventsArray();
    //this.eventsArray.push(this.newEvent);
    this.myDay.events = this.eventsArray; // tu nadpisuje mi, wiec trzeba zrobic pusha
    console.log('sprawdzam:', this.myDay);
    this.eventsService.addEvent(this.myDay).subscribe(day => {  console.log('day:', day); });
    // this.eventsService.storeNewEvent(this.newEvent);
  }

  showEvents(): boolean {
    this.dayEvents = JSON.parse(localStorage.getItem('dayEvents'));
    return true;
  }
}
