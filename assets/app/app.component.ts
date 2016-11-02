import {Component} from '@angular/core';

export class Shop {
  id: number;
  name: string;
}

const SHOPS: Shop[] = [
  {id: 2, name: 'Snakes & Lattes'},
  {id: 3, name: '401 Games'}
]


@Component({
    selector: 'my-app',
    template: `
              <h1>{{title}}</h1>
              <h2>{{shop.name}} details!</h2>
              <div><label>id: </label>{{shop.id}}</div>
              <div>
                <label>name: </label>
                <input [(ngModel)]="shop.name" placeholder="name">
              </div>
              `
})
export class AppComponent {
  title = 'Shop Local';
  shops = SHOPS;
  shop: Shop = {
    id: 1,
    name: 'Meeple Mart'
  };
}
