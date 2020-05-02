import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    try {
      return this.http
      .get('https://covid19.mathdro.id/api')
    } catch (e) {
      console.log(`Failed to fetch data: ${e.message}`, e);
      return;
    }
    
     }
  
  getCountries() {
    return this.http
      .get('https://covid19.mathdro.id/api/confirmed')
     }

  getCountryRecovered() {
    return this.http
      .get('https://covid19.mathdro.id/api/recovered')
    }    

  getCountriesDeaths() {
    return this.http
      .get('https://covid19.mathdro.id/api/deaths')
      }

}
