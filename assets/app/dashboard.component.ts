import { Component } from '@angular/core';

import { Shop }      from './shop';
import { ShopService} from './shop.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
})

export class DashboardComponent{
  constructor(shopService: ShopService) {
    shopService.getShops()
        .subscribe(
        shops => this.shops = shops,
        error => console.error('Error:' + err),
        () => console.log('Completed!')
      );
  }

  gotoDetail(shop: Shop): void { /*not implemented yet*/}
}
