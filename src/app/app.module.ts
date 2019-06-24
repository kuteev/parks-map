import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { MapAreaComponent } from './maparea/map-area.component';
import { ParkListComponent } from './parklist/park-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParksComponent } from './parks/parks.component';
import { ParksService } from './parks/parks.service';
import { MapProvider } from './interfaces/index';
import { GoogleMapsService } from './google-maps/google-maps.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MapAreaComponent,
    ParkListComponent,
    PageNotFoundComponent,
    ParksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ParksService,
    { provide: MapProvider, useClass: GoogleMapsService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
