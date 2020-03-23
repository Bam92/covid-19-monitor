import { Component, OnInit } from '@angular/core';
import { CoronaService } from './services/corona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'COVID-19 Monitor';
  corona;

  constructor(
    private coronaService: CoronaService
  ) {}

  ngOnInit() {
    this.coronaService.getAll().subscribe((response) => {
      console.log('this data', response);
      this.corona = response;
      console.log('corona', this.corona);    
      
    }, err => {
      console.log('Error', err);
      
    });
  }

}
