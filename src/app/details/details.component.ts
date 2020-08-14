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

  public selectedDay: string = '';
  public day: Plan;
  public hour: string;
  public content: string;
  public newEvent: Details; // obiekt wydarzenia dla danego dnia z godzinami i contentem
  public myArray: Details[];
  public daysArray: Plan[] = [];

  constructor(private router: Router, private eventsService: EventsService) { }

  ngOnInit(): void {
        this.newEvent = {hour: 0, content: ''};
    // this.myDay = {selectedDay: this.eventsService.returnDayName(), events: []};
  }


  addEvent() {
    this.selectedDay = localStorage.getItem('selectedDay'); 
    this.eventsService.makeOurArray(this.newEvent, this.selectedDay);
  }

}