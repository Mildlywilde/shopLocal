import {Component} from '@angular/core';

export class Shop {
  id: number;
  name: string;
}

const SHOPS: Shop[] = [
  {id: 1, name: 'Meeple Mart'},
  {id: 2, name: 'Snakes & Lattes'},
  {id: 3, name: '401 Games'}
]


@Component({
    selector: 'my-app',
    template: `
              <h1>{{title}}</h1>
              <h2>SHOPS!</h2>
              <ul class="shops">
                <li *ngFor="let shop of shops"
                [class.selected]="shop === selectedShop"
                (click)="onSelect(shop)">
                  <span class="badge">{{shop.id}}</span> {{shop.name}}
                </li>
              </ul>
              <div *ngIf="selectedShop">
                <h2>{{selectedShop.name}} details!</h2>
                <div><label>id: </label>{{selectedShop.id}}</div>
                <div>
                  <label>name: </label>
                  <input [(ngModel)]="selectedShop.name" placeholder="name"/>
                </div>
              </div>
              `
    ,
    styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .shops {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .shops li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .shops li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .shops li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .shops .text {
        position: relative;
        top: -3px;
      }
      .shops .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `]

})
export class AppComponent {
  title = 'Shop Local';
  shops = SHOPS;
  selectedShop: Shop

  onSelect(shop: Shop): void {
    this.selectedShop = shop;
  }
}
