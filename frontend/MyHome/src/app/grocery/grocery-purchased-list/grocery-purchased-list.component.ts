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
  purchasedGloceries: GroceryItem[];
  subscription: Subscription;

  constructor(/*private purchasedGroceryService: PurchasedGroceryService,*/
              private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    /*this.subscription = this.purchasedGroceryService.changedGloceries
      .subscribe((gloceries: GroceryItem[]) => {
        this.purchasedGrocery = gloceries;
      });
    this.purchasedGrocery = this.purchasedGroceryService.getPurchasedItems();*/

    this.subscription = this.store.select("purchasedGloceries")
      .subscribe((gloceriesState) => {
        this.purchasedGloceries = gloceriesState.gloceries;
      });
  }

  purchase() {
    this.store.dispatch(new actions.PurchasedGloceries(this.purchasedGloceries));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
