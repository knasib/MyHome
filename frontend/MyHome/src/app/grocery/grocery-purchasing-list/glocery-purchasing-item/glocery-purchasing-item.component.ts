import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GroceryItem } from 'src/app/shared/models/grocery.item.model';
import { PurchasedGloceryService } from 'src/app/shared/services/purchased.glocery.service';
import { PurchasingGloceryService } from 'src/app/shared/services/purchasing.glocery.service';

import * as fromApp from '../../../store/app.reducer';
import * as actions from '../store/grocery-purchasing.actions';

@Component({
  selector: 'app-glocery-purchasing-item',
  templateUrl: './glocery-purchasing-item.component.html',
  styleUrls: ['./glocery-purchasing-item.component.css']
})
export class GloceryPurchasingItemComponent implements OnInit {
  @Input() purchasingItem: GroceryItem;
  @Input() id: number;

  constructor(/*private purchasedGloceryService: PurchasedGloceryService,
    private purchasingGloceryService: PurchasingGloceryService,*/
    private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }

  MovedToPurchasedList() {
    //this.purchasedGloceryService.addToPurchasedList(this.purchasingItem);
    //this.removeItem();
  }

  removeItem() {
    //this.purchasingGloceryService.removeFromPurchasingList(this.id);
    this.store.dispatch(new actions.DeletePurchasingGlocery(this.id));
  }
}
