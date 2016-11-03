"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const shop_service_1 = require("./shop.service");
// const SHOPS: Shop[] = [
//   {id: 1, name: 'Meeple Mart'},
//   {id: 2, name: 'Snakes & Lattes'},
//   {id: 3, name: '401 Games'}
// ]
let AppComponent = class AppComponent {
    constructor(shopService) {
        this.title = 'Shop Local';
        shopService.getShops()
            .subscribe(shops => this.shops = shops, error => console.error('Error:' + err), () => console.log('Completed!'));
    }
    onSelect(shop) {
        this.selectedShop = shop;
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        providers: [shop_service_1.ShopService],
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
              <my-shop-detail [shop] = "selectedShop"></my-shop-detail>
              `,
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
    }),
    __metadata("design:paramtypes", [shop_service_1.ShopService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map