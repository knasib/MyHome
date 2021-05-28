import { Subject } from "rxjs";

import { GroceryItem } from "../models/grocery.item.model";

export class PurchasedGroceryService {
    changedGloceries = new Subject<GroceryItem[]>();

    private gloceries: GroceryItem[] = [
        new GroceryItem('Chicken', 230, 1, 'Kg'),
        new GroceryItem('Meat', 230, 1, 'Kg'),
        new GroceryItem('Atta', 53, 1, 'Kg'),
    ];

    getPurchasedItems() {
        return this.gloceries.slice();
    }

    getPurchasedItem(index: number) {
        return this.gloceries[index];
    }

    addToPurchasedList(item: GroceryItem) {
        
        this.gloceries.push(item);
        this.changedGloceries.next(this.gloceries.slice());
    }

    removeFromPurchasedList(index: number) {
        this.gloceries.splice(index, 1);
        this.changedGloceries.next(this.gloceries.slice());
    }

    updatePurchasedItem(index: number, updatedItem: GroceryItem) {
        this.gloceries[index] = updatedItem;
        this.changedGloceries.next(this.gloceries.slice());
    }
}