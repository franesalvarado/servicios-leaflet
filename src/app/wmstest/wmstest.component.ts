import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-wmstest',
  templateUrl: './wmstest.component.html',
  styleUrls: ['./wmstest.component.css']
})
export class WmstestComponent implements AfterViewInit {
  private map: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ -34.494,-58.707 ],
      zoom: 13
    });

    const tiles = L.tileLayer.wms("http://www.ign.es/wms-inspire/pnoa-ma?SERVICE=WMS&", {
      layers: "OI.OrthoimageCoverage",//nombre de la capa (ver get capabilities)
      format: 'image/jpeg',
      transparent: true,
      version: '1.3.0',//wms version (ver get capabilities)
      attribution: "PNOA WMS. Cedido por © Instituto Geográfico Nacional de España"
   })
   tiles.addTo(this.map);
  }

}
