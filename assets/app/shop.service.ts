import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ShopService {
  constructor(private http:Http) {}

  getShops() {
    return this.http.get('/shop')
      .map(response => response.json())
  }

  
}
