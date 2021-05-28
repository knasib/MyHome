import { Subject } from "rxjs";

import { GroceryItem } from "../models/grocery.item.model";

export class PurchasedGroceryService {
    changedGroceries = new Subject<GroceryItem[]>();

    private Groceries: GroceryItem[] = [
        new GroceryItem('Chicken', 230, 1, 'Kg'),
        new GroceryItem('Meat', 230, 1, 'Kg'),
        new GroceryItem('Atta', 53, 1, 'Kg'),
    ];

    getPurchasedItems() {
        return this.Groceries.slice();
    }

    getPurchasedItem(index: number) {
        return this.Groceries[index];
    }

    addToPurchasedList(item: GroceryItem) {
        
        this.Groceries.push(item);
        this.changedGroceries.next(this.Groceries.slice());
    }

    removeFromPurchasedList(index: number) {
        this.Groceries.splice(index, 1);
        this.changedGroceries.next(this.Groceries.slice());
    }

    updatePurchasedItem(index: number, updatedItem: GroceryItem) {
        this.Groceries[index] = updatedItem;
        this.changedGroceries.next(this.Groceries.slice());
    }
}