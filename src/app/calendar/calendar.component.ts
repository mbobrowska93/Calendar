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
  public myObject: Plan;

  constructor(private router: Router, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.selectedDay = '';
    // this.myObject = {selectedDay: '', events: []}; // stworzenie pustego obiektu
  }

  onValueChange(day: any) {
    this.selectedDay = day.value;
    console.log('wybrany dzien:', this.selectedDay); // OK
    localStorage.setItem('selectedDay', this.selectedDay);
  }



}

