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
        error => console.error('Error:' + error),
        () => console.log('Completed!')
      );
  }

  onSelect(shop: Shop): void {
    this.selectedShop = shop;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedShop.id])
  }

  add(name: string, postcode: string): void {
    name = name.trim()
    postcode = postcode.trim()
    // if (!name || !postcode) { return; }
    this.shopService.createShop(name, postcode)
        .subscribe(
        shop => {
          this.shops.push(shop);
          this.selectedShop = null;
        },
        error => console.error('Error:'),
        () => console.log('Completed')

      );
  }
}
