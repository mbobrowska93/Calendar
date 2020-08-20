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
     // this.eventsArray = JSON.parse(localStorage.getItem('eventsArray'));
  }

  addEvent() {
    this.myDay = this.eventsService.returnDayWithName();
    this.newEvent = new Details('', ''); // trzeba pozbyc sie dodawania "" po pierwszym CLICKK
    this.eventsService.storeNewEvent(this.newEvent);
    this.eventsArray = this.eventsService.returnEventsArray();
    this.myDay.events = this.eventsArray;
    console.log('tablica wydarzen:', this.eventsArray);
    // localStorage.setItem('eventsArray', JSON.stringify(this.eventsArray));
    this.eventsService.addEvent(this.myDay).subscribe(day => {  console.log('day:', day); });
  }

  showEvents(): boolean {
    return true;
  }
}
