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

  public selectedDay: string;
  public day: Plan;
  public hour: string;
  public content: string;
  public newEvent: Details; // obiekt wydarzenia dla danego dnia z godzinami i contentem
  public myArray: Details[];
  public daysArray: Plan[] = [];
  public myDay: Plan; // wybrany dzien

  constructor(private router: Router, private eventsService: EventsService) { }

  ngOnInit(): void { // gdy wybierzemy konkretny dzien to:

    this.newEvent = {hour: 0, content: ''}; // wydarzenie
    this.myDay = {selectedDay: this.selectedDay, events: []}; // dzien
    // dodac warunek ze jesli juz jest to go nie dodawac !!
  }

  readTheDay(): boolean {
    this.selectedDay = localStorage.getItem('selectedDay'); // pobranie nazwy kliknietego dnia
    return true;
  }

  addEvent() {
    this.eventsService.makeOurArray( this.myDay, this.newEvent); // przekazujemy do serwisu obiekt dnia i wydarzenia
    // var indeks = this.daysArray.indexOf(this.myDay); // znajdujemy w tablicy nasz dzien i zwracamy jego indeks
   //  this.daysArray[indeks].events.push(this.newEvent); // do konkretnego dnia, znalezionego przez indeks wrzucamy to nowe wydarzenie
   var tablica = this.eventsService.returnDaysArray();
    console.log('tablica dni:', tablica);
  }

}
