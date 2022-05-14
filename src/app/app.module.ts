import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MarkerService } from './service/marker.service';
import { PopupService } from './service/popup.service';
import { ShapeService } from './service/shape.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { PointDetailsComponent } from './point-details/point-details.component';

import { MaterialModule } from './material.module';
import { WmstestComponent } from './wmstest/wmstest.component'

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PointDetailsComponent,
    WmstestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    MarkerService,
    PopupService,
    ShapeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
