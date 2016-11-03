import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params}   from '@angular/router';
import {Location}                 from '@angular/common';

import {ShopService}              from './shop.service';

@Component({
  moduleId: module.id,
  selector: 'my-shop-detail',
  templateUrl: 'shop-detail.component.html'
})
export class ShopDetailComponent implements OnInit {
  constructor(
    private shopService: ShopService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.shopService.getShop(id)
        .subscribe(
          shop => this.shop = shop,
          error => console.error('Error:' + err),
          () => console.log('Completed!')
        );
    })
  }

  goBack(): void {
    this.location.back();
  }

  @Input()
  shop: Shop;
}
