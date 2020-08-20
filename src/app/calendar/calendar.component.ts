import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';
import { Plan } from '../plan';
import { Details } from '../details';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public minDate: Date = new Date('01/01/2015');
  public maxDate: Date = new Date('12/30/2025');
  public value: Date = new Date('08/12/2020');
  public selectedDay: string;
  public newDay: Date;
  public myDay: Plan;
  public dayEvents: Details[];

  constructor(private router: Router, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.selectedDay = '';
  }

  onValueChange(day: any) {
    this.newDay = new Date(day.value);
    var day = day.value.getDate();
    var month: any = this.newDay.getMonth(); // dodac jedynke trzeba
    month = month + 1;
    var year: any = this.newDay.getFullYear();

    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
    this.selectedDay = year + '/' + month + '/' + day;
    console.log('new Date:', this.selectedDay);
    this.myDay = new Plan();
    this.myDay.selectedDay = this.selectedDay;
    this.eventsService.storeDayName(this.myDay);

    // Pobranie wydarzen tego dnia z API
    this.eventsService.getEvents(year, month, day).subscribe(day => {
      // console.log('pobrany obiekt dnia:', day);
      this.dayEvents = day.events;
      console.log('tablica wydarzen tego dnia', this.dayEvents);
      this.eventsService.storeEvents(this.dayEvents);

    });
  }
}





