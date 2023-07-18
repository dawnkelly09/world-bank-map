import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.css']
})
export class MapDisplayComponent {
  name!: string
  city!: string
  region!: string
  income!: string
  longitude!: string
  latitude!: string

  constructor( private apiService: ApiService){ }

  ngOnInit(): void {
    
  }

  displayInfo() {

    console.log("here is some country info")
  }
}


