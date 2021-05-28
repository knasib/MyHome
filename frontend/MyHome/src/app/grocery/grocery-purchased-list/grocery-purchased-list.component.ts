import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GroceryItem } from 'src/app/shared/models/grocery.item.model';
import { PurchasedGroceryService } from 'src/app/shared/services/purchased.grocery.service';

import * as fromApp from '../../store/app.reducer';
import * as actions from './store/grocery-purchased.actions';

@Component({
  selector: 'app-grocery-purchased-list',
  templateUrl: './grocery-purchased-list.component.html',
  styleUrls: ['./grocery-purchased-list.component.css']
})
export class GroceryPurchasedListComponent implements OnInit, OnDestroy {
  purchasedGroceries: GroceryItem[];
  subscription: Subscription;

  constructor(/*private purchasedGroceryService: PurchasedGroceryService,*/
              private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    /*this.subscription = this.purchasedGroceryService.changedGroceries
      .subscribe((Groceries: GroceryItem[]) => {
        this.purchasedGrocery = Groceries;
      });
    this.purchasedGrocery = this.purchasedGroceryService.getPurchasedItems();*/

    this.subscription = this.store.select("purchasedGroceries")
      .subscribe((GroceriesState) => {
        this.purchasedGroceries = GroceriesState.Groceries;
      });
  }

  purchase() {
    this.store.dispatch(new actions.PurchasedGroceries(this.purchasedGroceries));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
