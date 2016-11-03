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
const common_1 = require("@angular/common");
const shop_service_1 = require("./shop.service");
let ShopDetailComponent = class ShopDetailComponent {
    constructor(shopService, route, location) {
        this.shopService = shopService;
        this.route = route;
        this.location = location;
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
            let id = +params['id'];
            this.shopService.getShop(id)
                .subscribe(shop => this.shop = shop, error => console.error('Error:' + err), () => console.log('Completed!'));
        });
    }
    goBack() {
        this.location.back();
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ShopDetailComponent.prototype, "shop", void 0);
ShopDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-shop-detail',
        templateUrl: 'shop-detail.component.html'
    }),
    __metadata("design:paramtypes", [shop_service_1.ShopService,
        router_1.ActivatedRoute,
        common_1.Location])
], ShopDetailComponent);
exports.ShopDetailComponent = ShopDetailComponent;
//# sourceMappingURL=shop-detail.component.js.map