import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule }           from '@angular/router';
import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule}     from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { AppComponent }   from './app.component';
import { ShopsComponent}  from './shops.component';
import {ShopDetailComponent} from './shop-detail.component';
import { ShopService}     from './shop.service';
import { DashboardComponent} from './dashboard.component';

@NgModule({
    declarations: [AppComponent, DashboardComponent, ShopsComponent, ShopDetailComponent],
    imports:      [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot([{ path: 'shops', component: ShopsComponent }, { path: 'dashboard', component: DashboardComponent }, { path: '', redirectTo: '/dashboard', pathMatch: 'full'}, { path: 'detail/:id', component: ShopDetailComponent }])],
    bootstrap:    [AppComponent],
    providers:    [ShopService]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
