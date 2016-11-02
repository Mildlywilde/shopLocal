import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule}     from '@angular/forms';
import { AppComponent }   from './app.component';
import {ShopDetailComponent} from './shop-detail.component';

@NgModule({
    declarations: [AppComponent, ShopDetailComponent],
    imports:      [BrowserModule, FormsModule],
    bootstrap:    [AppComponent],
})
export class AppModule {}
