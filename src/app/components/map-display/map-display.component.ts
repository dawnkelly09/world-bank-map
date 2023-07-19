import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.css']
})
export class MapDisplayComponent {
  name!: string;
  city!: string;
  region!: string;
  income!: string;
  longitude!: string;
  latitude!: string;

  constructor(private apiService: ApiService) { }

  displayInfo(id: string): void {
    this.apiService.getCountryInfo(id).subscribe((data: any) => {
      const [country] = data[1]; // Get the country object from the API response
      this.name = country.name;
      this.city = country.capitalCity;
      this.region = country.region.value;
      this.income = country.incomeLevel.value;
      this.longitude = country.longitude;
      this.latitude = country.latitude;
    });
  }
}


