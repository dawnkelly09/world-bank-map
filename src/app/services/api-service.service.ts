import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }
}

/*Need to create two functions
1) one method that accepts a country name as an input parameter that returns additional information gathered from the API for the selected country
2) one method that will trigger the API call when a country is selected and set a local variable that will receive the information about the country for display in the right column of the HTML page

