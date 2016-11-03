import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Shop } from './shop';

@Injectable()
export class ShopService {
  constructor(private http:Http) {}

  private headers = new Headers({ 'Content-Type': 'application/json' });

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getShops() {
    return this.http.get('/shop')
      .map(response => response.json())
  }

  getShop(id) {
    return this.http.get(`/shop/${id}`)
      .map(response => response.json())
  }

  updateShop(shop: Shop): Promise<Shop> {
    return this.http.put(`/shop/${shop.id}`, JSON.stringify(shop), { headers: this.headers })
      .toPromise()
      .then(() => shop )
      .catch(this.handleError)
  }

  // createShop(){
  //   this.http.post('/shop')
  // }
}
