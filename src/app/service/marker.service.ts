import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';
import { ActivatedRoute, Router } from '@angular/router';

//* Const
const shadowUrl = 'assets/marker-shadow.png';
const iconUrlWrong = 'assets/marker-icon-red.png';
const iconUrlFine = 'assets/marker-icon.png';

const iconFine = L.icon({
  iconUrl: iconUrlFine,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
const iconWrong = L.icon({
  iconUrl: iconUrlWrong,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});


@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  sumideros: string = '/assets/data/sumideros.geojson';
  posteDeLuz: string = '/assets/data/poste-de-luz.geojson';

  constructor(private http: HttpClient,
    private popupService: PopupService,
    private route: ActivatedRoute,
    private router: Router
    ) {
  }

  
  customClearLayers(map: L.Map) {
    map.eachLayer(function (layer) {
      if (layer instanceof L.Marker || layer instanceof L.CircleMarker) {
        map.removeLayer(layer);
      }
    });
  }
  
  makeSumiderosMakers(map: L.Map): void {
    this.http.get(this.sumideros).subscribe((res: any) => {
      for (const c of res.features) {
        if(c.properties.solucionado){
          const lon = c.geometry.coordinates[0];
          const lat = c.geometry.coordinates[1];
          const marker = L.marker([lat, lon], {icon: iconFine
          }).on('click', this.markerOnClick.bind(this, c.properties));
          marker.addTo(map);
        } else {
          const lon = c.geometry.coordinates[0];
          const lat = c.geometry.coordinates[1];
          const marker = L.marker([lat, lon], {icon: iconWrong
          }).on('click', this.markerOnClick.bind(this, c.properties));
          marker.addTo(map);
        }
      }
    });
  }
  
  makeSumiderosToComplete(map: L.Map): void {
    this.http.get(this.sumideros).subscribe((res: any) => {
      for (const c of res.features) {
        if(!c.properties.solucionado){
          const lon = c.geometry.coordinates[0];
          const lat = c.geometry.coordinates[1];
          const marker = L.marker([lat, lon], {icon: iconWrong
          }).on('click', this.markerOnClick.bind(this, c.properties));
          marker.addTo(map);
        }
      }
    });
  }
  
  makeSumiderosCompleted(map: L.Map): void {
    this.http.get(this.sumideros).subscribe((res: any) => {
      for (const c of res.features) {
        if(c.properties.solucionado){
          const lon = c.geometry.coordinates[0];
          const lat = c.geometry.coordinates[1];
          const marker = L.marker([lat, lon], {icon: iconFine
          }).on('click', this.markerOnClick.bind(this, c.properties));
          marker.addTo(map);
        }
      }
    });
  }  

  makePosteDeLuzMakers(map: L.Map): void {
    this.http.get(this.posteDeLuz).subscribe((res: any) => {
      for (const c of res.features) {
        if(c.properties.solucionado){
          const lon = c.geometry.coordinates[0];
          const lat = c.geometry.coordinates[1];
          const marker = L.marker([lat, lon], {icon: iconFine
          }).on('click', this.markerOnClick.bind(this, c.properties));
          marker.addTo(map);
        } else {
          const lon = c.geometry.coordinates[0];
          const lat = c.geometry.coordinates[1];
          const marker = L.marker([lat, lon], {icon: iconWrong
          }).on('click', this.markerOnClick.bind(this, c.properties));
          marker.addTo(map);
        }
      }
    });
  }
  
  makePosteDeLuzToComplete(map: L.Map): void {
    this.http.get(this.posteDeLuz).subscribe((res: any) => {
      for (const c of res.features) {
        if(!c.properties.solucionado){
          const lon = c.geometry.coordinates[0];
          const lat = c.geometry.coordinates[1];
          const marker = L.marker([lat, lon], {icon: iconWrong
          }).on('click', this.markerOnClick.bind(this, c.properties));
          marker.addTo(map);
        }
      }
    });
  }
  
  makePosteDeLuzCompleted(map: L.Map): void {
    this.http.get(this.posteDeLuz).subscribe((res: any) => {
      for (const c of res.features) {
        if(c.properties.solucionado){
          const lon = c.geometry.coordinates[0];
          const lat = c.geometry.coordinates[1];
          const marker = L.marker([lat, lon], {icon: iconFine
          }).on('click', this.markerOnClick.bind(this, c.properties));
          marker.addTo(map);
        }
      }
    });
  }

  markerOnClick(e: any, c:any){
    console.log(e);
    console.log(c);
    this.router.navigate(['details']);
  }

//  makeCapitalCircleMarkers(map: L.Map): void {
//    this.http.get(this.sumideros).subscribe((res: any) => {
//
//      const maxPop = Math.max(...res.features.map((x: any) => x.properties.population), 0);
//
//      for (const c of res.features) {
//        const lon = c.geometry.coordinates[0];
//        const lat = c.geometry.coordinates[1];
//        const circle = L.circleMarker([lat, lon], {
//          radius: MarkerService.scaledRadius(c.properties.population, maxPop)
//        });
//        circle.bindPopup(this.popupService.makeCapitalPopup(c.properties));
//
//        circle.addTo(map);
//      }
//    });
//  }
          
// static scaledRadius(val: number, maxVal: number): number {
//   return 20 * (val / maxVal);
// }
        }
        