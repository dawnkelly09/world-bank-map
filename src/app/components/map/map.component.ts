import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  id!: string
  title!: string
  
  mapComponent = MapComponent
  @Output() countrySelected = new EventEmitter<{id: string, title: string}>();
  

  ngOnInit() {
    this.countrySelected.subscribe(data => {
      console.log(data); // logs the emitted data
    });
  }

  onSelectCountry(){
    this.countrySelected.emit({id: this.id, title: this.title})
    
    console.log("is this what's working?")
  }
}

