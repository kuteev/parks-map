import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapAreaComponent } from './map-area/map-area.component';
import { ParkListComponent } from './park-list/park-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParksComponent } from './parks/parks.component';
import { MapProvider } from './core/map-provider';
import { GoogleMapsService } from './google-maps/google-maps.service';
import { ParkListService } from './core/park-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapAreaComponent,
    ParkListComponent,
    PageNotFoundComponent,
    ParksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    ParkListService,
    { provide: MapProvider, useClass: GoogleMapsService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
