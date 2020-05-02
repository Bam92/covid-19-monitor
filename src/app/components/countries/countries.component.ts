import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../../services/corona.service';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})

export class CountriesComponent implements OnInit {
  // title = 'COVID-19 Monitor';
  countryInfo;
  CountryInfoRecovered;
  CountryInfoDeaths;

  constructor(
    private coronaService: CoronaService
  ) {}

  ngOnInit() {
    /* Got some hints from stackoverflow: 
    url: https://stackoverflow.com/questions/19233283/sum-javascript-object-propertya-values-with-same-object-propertyb-in-array-of-ob
    by: mplungjan
     */
    // Confirmed Cases
    this.coronaService.getCountries().subscribe((response) => {
      this.countryInfo = response.reduce((accumulator, cur) => {
        let country = cur.countryRegion;
        let found = accumulator.find(elem => elem.countryRegion === country)
       
        if (found) {
          found.confirmed += cur.confirmed;          
        }
        else accumulator.push(cur);
        return accumulator;
      }, []);
      
    }, err => {
      console.log('Error', err);
      
    });

    // Recovered cases
    this.coronaService.getCountryRecovered().subscribe(response => {
      this.CountryInfoRecovered = response.reduce((accumulator, cur) => {
        let country = cur.countryRegion;
        let found = accumulator
                        .find(elem => elem.countryRegion === country)
        
        if (found) found.deaths += cur.deaths;        
        else accumulator.push(cur);

        return accumulator;
      }, []);
      
    }, err => {
      console.log('Error', err);
      
    });

    // Deaths info
    this.coronaService.getCountriesDeaths().subscribe(response => {
      this.CountryInfoDeaths = response.reduce((accumulator, cur) => {
        let country = cur.countryRegion;
        let found = accumulator
                        .find(elem => elem.countryRegion === country)
        
        if (found) found.recovered += cur.recovered;        
        else accumulator.push(cur);

        return accumulator;
      }, []);
      
    }, err => {
      console.log('Error', err);
      
    });
  }

}