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
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const app_component_1 = require("./app.component");
const shops_component_1 = require("./shops.component");
const shop_detail_component_1 = require("./shop-detail.component");
const shop_service_1 = require("./shop.service");
const dashboard_component_1 = require("./dashboard.component");
const app_routing_module_1 = require("./app-routing.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent, shops_component_1.ShopsComponent, shop_detail_component_1.ShopDetailComponent],
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule],
        bootstrap: [app_component_1.AppComponent],
        providers: [shop_service_1.ShopService]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map