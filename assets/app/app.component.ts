import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
            <h1>{{title}}</h1>
            <nav>
              <a routerLink="/dashboard">Dashboard</a>
              <a routerLink="/shops">Shops</a>
            <router-outlet></router-outlet>
            `
})

export class AppComponent {
  title = 'Shop Local'
}
