import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { GroceryItem } from 'src/app/shared/models/grocery.item.model';
import { PurchasingGroceryService } from 'src/app/shared/services/purchasing.grocery.service';

import * as fromApp from '../../store/app.reducer';
import * as purchasingActions from './store/grocery-purchasing.actions';
import * as purchasedActions from '../grocery-purchased-list/store/grocery-purchased.actions';

@Component({
  selector: 'app-grocery-purchasing-list',
  templateUrl: './grocery-purchasing-list.component.html',
  styleUrls: ['./grocery-purchasing-list.component.css']
})
export class GroceryPurchasingListComponent implements OnInit {
  purchasingGloceries: GroceryItem[];
  subscription: Subscription;
  addGroceryForm: FormGroup;

  constructor(/*private purchasingGroceryService: PurchasingGroceryService,*/
              private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    /*this.subscription = this.purchasingGroceryService.changeGloceries
      .subscribe((gloceries: GroceryItem[]) => {
        this.purchasingGrocery = gloceries;
      })
    this.purchasingGrocery = this.purchasingGroceryService.getPurchasingItems();*/

    this.subscription = this.store.select("purchasingGloceries").subscribe((purchasingGloceriesState) => {
      this.purchasingGloceries = purchasingGloceriesState.gloceries;
    });

    this.initForm();
  }

  initForm() {
    this.addGroceryForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      quantity: new FormControl(1, Validators.required),
      price: new FormControl(100, Validators.required),
      quantityUnit: new FormControl('Kg', Validators.required),
      category: new FormControl("OTHERS")
    });
  }

  addGroceryItem() {
    this.store.dispatch(new purchasingActions.AddPurchasingGrocery(this.addGroceryForm.value));
    this.initForm();
  }

  purchaseAll() {
    let gloceries = [];
    this.purchasingGloceries.forEach((item) => {
      let newItem = {...item};
      newItem.purchaseDate = new Date();
      gloceries.push(newItem);
    });
    this.store.dispatch(new purchasedActions.AddToPurchasedList(gloceries));
    this.store.dispatch(new purchasingActions.PurchasePurchasingGloceries());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
