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
const router_1 = require("@angular/router");
const shop_service_1 = require("./shop.service");
let ShopsComponent = class ShopsComponent {
    constructor(shopService, router) {
        this.shopService = shopService;
        this.router = router;
        this.title = 'Shop Local';
    }
    ngOnInit() {
        this.shopService.getShops()
            .subscribe(shops => this.shops = shops, error => console.error('Error:' + err), () => console.log('Completed!'));
    }
    onSelect(shop) {
        this.selectedShop = shop;
    }
    gotoDetail() {
        this.router.navigate(['/detail', this.selectedShop.id]);
    }
};
ShopsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-shops',
        templateUrl: 'shops.component.html',
        styleUrls: ['shops.component.css']
    }),
    __metadata("design:paramtypes", [shop_service_1.ShopService,
        router_1.Router])
], ShopsComponent);
exports.ShopsComponent = ShopsComponent;
//# sourceMappingURL=shops.component.js.map