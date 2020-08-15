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
  public day: Plan;
  public eventsArray: Details[] = [];
  public daysArray: Plan[] = [];

  constructor(private router: Router, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.selectedDay = '';
    this.day = { selectedDay: '', events: new Array() };
  }

  onValueChange(day: any) {
    this.selectedDay = day.value; // odczytaj jaki dzien kliknieto
    this.day.selectedDay = this.selectedDay; // prypisz ten dzien do property obiektu
    console.log('wybrany dzien:', this.day);
    if (this.daysArray.length === null) { // jesli tablicy nie ma
      this.daysArray = new Array(this.day); // stworz tablice dni z wybranym dniem
    }
    else { // jesli tablica istnieje
      console.log('wybrany dzien:', this.selectedDay); // OK
      let indeks = this.daysArray.indexOf(this.day); // sprawdz czy klikniety dzien juz istnieje w tablicy
      if (indeks === -1) { // jesli nie
        this.daysArray.push(this.day); // to go wrzuc na tablice
      } else {
        this.eventsService.getIndeks(indeks);
      }
      this.eventsService.przechowajDane(this.daysArray, this.eventsArray, this.day);
    }
  }



}

