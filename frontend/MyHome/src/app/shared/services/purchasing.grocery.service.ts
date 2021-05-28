import { Subject } from "rxjs";

import { GroceryItem } from "../models/grocery.item.model";

export class PurchasingGroceryService {
    changeGroceries = new Subject<GroceryItem[]>();

    private Groceries: GroceryItem[] = [
        new GroceryItem('Chicken', 220, 1, 'Kg'),
        new GroceryItem('Meat', 220, 1, 'Kg'),
        new GroceryItem('Atta', 55, 1, 'Kg'),
    ];

    getPurchasingItems() {
        return this.Groceries.slice();
    }

    getPurchasingItem(index: number) {
        return this.Groceries[index];
    }

    addToPurchasingList(item: GroceryItem) {
        this.Groceries.push(item);
        this.changeGroceries.next(this.Groceries.slice());
    }

    removeFromPurchasingList(index: number) {
        this.Groceries.splice(index, 1);
        this.changeGroceries.next(this.Groceries.slice());
    }

    updatePurchasingItem(index: number, updatedItem: GroceryItem) {
        this.Groceries[index] = updatedItem;
        this.changeGroceries.next(this.Groceries.slice());
    }
}