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
  public hour: number;
  public content: string;
  public newEvent: Details; // obiekt wydarzenia dla danego dnia z godzinami i contentem
  public eventsArray: Details[];
  public daysArray: Plan[] = [];

  constructor(private router: Router, private eventsService: EventsService) { }

  ngOnInit(): void {
      this.newEvent = {hour: 0, content: ''};
      this.daysArray = this.eventsService.returnTablicaDni();
      this.eventsArray = this.eventsService.returnTablicaWydarzen();
      this.day = this.eventsService.returnObiektDnia();
  }

  addEvent() {
    this.newEvent = new Details(this.hour, this.content);
    var indeks = this.eventsService.returnIndeks();
    this.daysArray[indeks].events.push(this.newEvent);
    console.log('tablica dni:', this.daysArray);

      }
}
