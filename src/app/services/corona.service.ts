import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http
      .get('https://covid19.mathdro.id/api')
     }


}
