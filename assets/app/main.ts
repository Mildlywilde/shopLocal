import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule }              from './app.module';
import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule}     from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { AppComponent }   from './app.component';
import {ShopDetailComponent} from './shop-detail.component';

@NgModule({
    declarations: [AppComponent, ShopDetailComponent],
    imports:      [BrowserModule, HttpModule, FormsModule],
    bootstrap:    [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
