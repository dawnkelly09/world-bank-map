import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://api.worldbank.org/v2/country';
  public countrySelected = new Subject<string>();

  constructor(private http: HttpClient) {
    console.log('ApiService constructor called')
    this.subscribeToCountrySelected()
  }

  subscribeToCountrySelected() {
    this.countrySelected.subscribe(id => {
      console.log('Country selected:', id);
      this.getCountryInfo(id).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.error('Error:', error);
        }
      );
    });
  }

  getCountryInfo(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}?format=json`;
    console.log(url);
    return this.http.get(url).pipe(
      catchError(err => {
        console.error('API Error:', err);
        return throwError(err);
      })
    );
  }

  selectCountry(id: string) {
    this.countrySelected.next(id);
  }
}


