import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  makeCapitalPopup(data: any): string {     
    return `` +
  `<div>Capital: ${ data.name }</div>` +
  `<div>State: ${ data.state }</div>` +
  `<div>Population: ${ data.population }</div>`+
  `<div><a class="nav-link" href="/details/${ data.name }"]">Ver punto</a></div>`
}

}
