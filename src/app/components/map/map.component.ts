import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  id!: string
  @Output() countrySelected = new EventEmitter<{id: string}>();
  
  onSelectCountry(event: MouseEvent): void {
    const targetElement = event.target as SVGElement;
    this.id = targetElement.id;
    
    // Emitting the event containing the id property
    this.countrySelected.emit({ id: this.id });
    console.log(this.id)
  }
}

/*This code is defining an Angular component named `MapComponent`. 

1. The `id` property is declared to store the id of an SVG element.
2. An `Output` decorator is being used to create an instance of `EventEmitter` named `countrySelected` which will emit an object with a `string` type `id` property. This allows the `MapComponent` to emit custom events that can be listened to by parent components.
3. The `onSelectCountry` method is defined to handle `MouseEvent`. When the mouse event happens, it gets the target element (which is assumed to be an SVG element), and retrieves its `id`. It then assigns this `id` to the `id` property of the `MapComponent` and emits an event containing the `id` through the `countrySelected` EventEmitter.

So, in summary, this component is designed to handle the selection of a country on a map (represented by SVG elements). When a country (SVG element) is clicked, it emits an event containing the `id` of the selected SVG element, which presumably corresponds to a specific country.*/

