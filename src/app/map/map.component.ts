import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../service/marker.service';
import { ShapeService } from '../service/shape.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map: any;
  private calles: any;

  sumideroChecked = true;
  postesDeLuzChecked = false;
  radioButtonOption = "1";

  constructor(
    private markerService: MarkerService,
    private shapeService: ShapeService
    ) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.shapeService.getStateShapes().subscribe(calles => {
      this.calles = calles;
      this.initCallesLayer();
    });
    this.markerService.makeSumiderosMakers(this.map);
  }
    
  private initMap(): void {
    this.map = L.map('map', {
      center: [ -34.494,-58.707 ],
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
  
  private initCallesLayer() {
    const stateLayer = L.geoJSON(this.calles, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#008f68',
        fillOpacity: 0.2,
        fillColor: '#6DB65B'
      })
    });
    this.map.addLayer(stateLayer);
  }

  statusOfWork(e: any){
    this.markerService.customClearLayers(this.map)
    switch (this.radioButtonOption) {
      case "1":
        if(this.sumideroChecked){
          this.markerService.makeSumiderosMakers(this.map);
        }
        if(this.postesDeLuzChecked){
          this.markerService.makePosteDeLuzMakers(this.map);
        }
        break;
      case "2":
        if(this.sumideroChecked){
          this.markerService.makeSumiderosToComplete(this.map);
        }
        if(this.postesDeLuzChecked){
          this.markerService.makePosteDeLuzToComplete(this.map);
        }
        break;
      case "3":
        if(this.sumideroChecked){
          this.markerService.makeSumiderosCompleted(this.map);
        }
        if(this.postesDeLuzChecked){
          this.markerService.makePosteDeLuzCompleted(this.map);
        }
        break;
     }
  }
}
