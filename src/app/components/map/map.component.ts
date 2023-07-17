import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Output() clickCountry = new EventEmitter()

  onSelectCountry() {
    this.clickCountry.emit()
  }


}
