import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';
import { Plan } from '../plan';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public selectedDay: string;
  public newEvent: Plan;
  public hour: string;
  public content: string;

  constructor(private router: Router, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.newEvent = { hour: 0, selectedDay: this.selectedDay, content: ''};
  }

  readTheDay(): boolean {
    this.selectedDay = localStorage.getItem('selectedDay');
    return true;
  }

  addEvent() {
    // dodanie do API nowego wydarzenia
     this.eventsService.makeObject(this.newEvent.hour, this.selectedDay, this.newEvent.content);

  }

}
