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
  purchasingGroceries: GroceryItem[];
  subscription: Subscription;
  addGroceryForm: FormGroup;

  constructor(/*private purchasingGroceryService: PurchasingGroceryService,*/
              private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    /*this.subscription = this.purchasingGroceryService.changeGroceries
      .subscribe((Groceries: GroceryItem[]) => {
        this.purchasingGrocery = Groceries;
      })
    this.purchasingGrocery = this.purchasingGroceryService.getPurchasingItems();*/
    
    this.store.dispatch(new purchasingActions.GetPurchasingGroceries());

    this.subscription = this.store.select("purchasingGroceries").subscribe((purchasingGroceriesState) => {
      this.purchasingGroceries = purchasingGroceriesState.Groceries;
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
    let Groceries = [];
    this.purchasingGroceries.forEach((item) => {
      let newItem = {...item};
      newItem.purchaseDate = new Date();
      Groceries.push(newItem);
    });
    this.store.dispatch(new purchasedActions.AddToPurchasedList(Groceries));
    this.store.dispatch(new purchasingActions.EmptyList());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
