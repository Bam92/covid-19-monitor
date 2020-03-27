import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../../services/corona.service';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})

export class CountriesComponent implements OnInit {
  title = 'COVID-19 Monitor';
  countryInfo;

  constructor(
    private coronaService: CoronaService
  ) {}

  ngOnInit() {
    this.coronaService.getCountries().subscribe((response) => {
      console.log('this data', response);
      this.countryInfo = response;
      console.log('corona', this.countryInfo);    
      
    }, err => {
      console.log('Error', err);
      
    });
  }

}