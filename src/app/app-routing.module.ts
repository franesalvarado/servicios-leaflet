import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { PointDetailsComponent } from './point-details/point-details.component';
import { WmstestComponent } from './wmstest/wmstest.component';

const routes: Routes = [
  { path: '', component: MapComponent },
  { path: 'details', component: PointDetailsComponent },
  { path: 'test', component: WmstestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
