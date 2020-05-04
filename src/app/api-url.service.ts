import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  public url = 'https://sankalp1728-salonapp.herokuapp.com';
  getUrl(path) {
      return this.url + path;
  }
}
