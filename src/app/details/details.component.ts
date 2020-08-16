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

  constructor(private router: Router, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.newEvent = {hour: 0, content: ''};
  }

  addEvent() {
    this.eventsService.storeNewEvent(this.newEvent);
  }
}
