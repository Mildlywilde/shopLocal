import {Component, Input} from '@angular/core';
import {Shop}             from './shop';


@Component({
  selector: 'my-shop-detail',
  template: `
            <div *ngIf="shop">
              <h2>{{shop.name}} details!</h2>
              <div><label>id: </label>{{shop.id}}</div>
              <div>
                <label>name: </label>
                <input [(ngModel)]="shop.name" placeholder="name"/>
              </div>
            </div>
            `
})
export class ShopDetailComponent {
  @Input()
  shop: Shop;
}
