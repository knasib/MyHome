import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GroceryItem } from 'src/app/shared/models/grocery.item.model';
import { PurchasedGroceryService } from 'src/app/shared/services/purchased.grocery.service';
import { PurchasingGroceryService } from 'src/app/shared/services/purchasing.grocery.service';

import * as fromApp from '../../../store/app.reducer';
import * as actions from '../store/grocery-purchasing.actions';

@Component({
  selector: 'app-grocery-purchasing-item',
  templateUrl: './grocery-purchasing-item.component.html',
  styleUrls: ['./grocery-purchasing-item.component.css']
})
export class GroceryPurchasingItemComponent implements OnInit {
  @Input() purchasingItem: GroceryItem;
  @Input() id: number;

  constructor(/*private purchasedGroceryService: PurchasedGroceryService,
    private purchasingGroceryService: PurchasingGroceryService,*/
    private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }

  MovedToPurchasedList() {
    //this.purchasedGroceryService.addToPurchasedList(this.purchasingItem);
    //this.removeItem();
  }

  removeItem() {
    //this.purchasingGroceryService.removeFromPurchasingList(this.id);
    this.store.dispatch(new actions.DeletePurchasingGrocery(this.id));
  }
}
