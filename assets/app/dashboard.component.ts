import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';

import { Shop }      from './shop';
import { ShopService} from './shop.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
})

export class DashboardComponent implements OnInit {
  constructor(
    private shopService: ShopService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.shopService.getShops()
        .subscribe(
        shops => this.shops = shops,
        error => console.error('Error:' + err),
        () => console.log('Completed!')
      );
  }
  gotoDetail(shop: Shop): void {
    let link = ['/detail', shop.id]
    this.router.navigate(link);
  }
}
