import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';
import { Plan } from '../plan';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public minDate: Date = new Date ('01/01/2015');
  public maxDate: Date = new Date ('12/30/2025');
  public value: Date = new Date ('08/12/2020');
  public selectedDay: string;
  public daysArray: Plan[]; // tablica dni, tablica obiektów dni

  constructor(private router: Router, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.daysArray = [];
  }

  onValueChange(day: any) {
    this.selectedDay = day.value;
    console.log(this.selectedDay);
    localStorage.setItem('selectedDay', this.selectedDay);
    // potem w momencie pobrania tej zmiennej niech nam stworzy obiekt
    // po wybraniu dnia wysyla pustą tablice do serwisu
    this.eventsService.makeDaysArray(this.daysArray);
  }



}
