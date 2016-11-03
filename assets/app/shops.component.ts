import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Shop}      from './shop';
import {ShopService} from './shop.service';


@Component({
    moduleId: module.id,
    selector: 'my-shops',
    templateUrl: 'shops.component.html',
    styleUrls: ['shops.component.css']
})

export class ShopsComponent implements OnInit {
  title = 'Shop Local';
  selectedShop: Shop

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

  onSelect(shop: Shop): void {
    this.selectedShop = shop;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedShop.id])
  }
}
