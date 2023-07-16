import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MapComponent } from './components/map/map.component';
import { InfoDisplayComponent } from './components/info-display/info-display.component';
import { MapDisplayComponent } from './components/map-display/map-display.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  //components go here
  declarations: [
    AppComponent,
    MapComponent,
    InfoDisplayComponent,
    MapDisplayComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent
  ],
  //modules go here
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
