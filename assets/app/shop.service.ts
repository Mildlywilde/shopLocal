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

  updateShop(shop: Shop) {
    return this.http.put(`/shop/${shop.id}`, {name: shop.name, postcode: shop.postcode}, { headers: this.headers })
      .map(response => response.json())
  }

  createShop(name, postcode){
    return this.http.post('/shop', {name: name, postcode: postcode}, {headers: this.headers})
      .map(response => response.json())
  }
}
