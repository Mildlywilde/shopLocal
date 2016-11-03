import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
            <h1>{{title}}</h1>
            <nav>
              <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
              <a routerLink="/shops" routerLinkActive="active">Shops</a>
            <router-outlet></router-outlet>
            `,
  styleUrls: [ 'app.component.css' ]
})

export class AppComponent {
  title = 'Shop Local'
}
