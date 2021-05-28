import { Component, Input, OnInit } from '@angular/core';
import { GroceryItem } from 'src/app/shared/models/grocery.item.model';
import { PurchasedGroceryService } from 'src/app/shared/services/purchased.grocery.service';
import { PurchasingGroceryService } from 'src/app/shared/services/purchasing.grocery.service';

import * as fromApp from '../../../store/app.reducer';
import * as purchasedActions from '../store/grocery-purchased.actions';
import * as purchasingActions from '../../grocery-purchasing-list/store/grocery-purchasing.actions';
import { ActionsSubject, Store } from '@ngrx/store';

@Component({
  selector: 'app-grocery-purchased-item',
  templateUrl: './grocery-purchased-item.component.html',
  styleUrls: ['./grocery-purchased-item.component.css']
})
export class GroceryPurchasedItemComponent implements OnInit {
  @Input() purchasedItem: GroceryItem;
  @Input() id: number;

  constructor(/*private purchasedGroceryService: PurchasedGroceryService,
              private purchasingGroceryService: PurchasingGroceryService,*/
              private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {

  }

  MovedToPurchasingList(){
    //this.purchasingGroceryService.addToPurchasingList(this.purchasedItem);
    this.store.dispatch(new purchasingActions.AddPurchasingGrocery(this.purchasedItem));
    this.removeItem();
  }

  removeItem() {
    //this.purchasedGroceryService.removeFromPurchasedList(this.id);
    this.store.dispatch(new purchasedActions.DeletePurchasedGrocery(this.id));
  }
}
