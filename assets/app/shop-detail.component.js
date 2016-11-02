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
const shop_1 = require("./shop");
let ShopDetailComponent = class ShopDetailComponent {
};
__decorate([
    core_1.Input(),
    __metadata("design:type", shop_1.Shop)
], ShopDetailComponent.prototype, "shop", void 0);
ShopDetailComponent = __decorate([
    core_1.Component({
        selector: 'my-shop-detail',
        template: `
            <div *ngIf="shop">
              <h2>{{shop.name}} details!</h2>
              <div><label>id: </label>{{shop.id}}</div>
              <div>
                <label>name: </label>
                <input [(ngModel)]="shop.name" placeholder="name"/>
              </div>
            </div>
            `
    }),
    __metadata("design:paramtypes", [])
], ShopDetailComponent);
exports.ShopDetailComponent = ShopDetailComponent;
//# sourceMappingURL=shop-detail.component.js.map