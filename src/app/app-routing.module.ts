import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { PointDetailsComponent } from './point-details/point-details.component';

const routes: Routes = [
  { path: '', component: MapComponent },  
  { path: 'details/:id', component: PointDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
