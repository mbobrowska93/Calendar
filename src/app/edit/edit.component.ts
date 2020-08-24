import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';
import { Details } from '../details';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public updateEvent: Details;

  constructor(private router: Router, private eventsService: EventsService) { }

  ngOnInit(): void {

  }

  getEvent(): boolean {
    this.updateEvent = this.eventsService.returnEditEvent();
    return true;
  }

  updateThisEvent(updateEvent: Details) {
    this.eventsService.compareEvents(updateEvent);

    let myDay = this.eventsService.returnDayWithName();
    let eventsArray = this.eventsService.returnEventsArray();
    myDay.events = eventsArray;
    this.eventsService.addEvent(myDay).subscribe(day => {  console.log('day:', day); });
  }

}
