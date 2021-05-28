import { Subject } from "rxjs";

import { GroceryItem } from "../models/grocery.item.model";

export class PurchasingGroceryService {
    changeGloceries = new Subject<GroceryItem[]>();

    private gloceries: GroceryItem[] = [
        new GroceryItem('Chicken', 220, 1, 'Kg'),
        new GroceryItem('Meat', 220, 1, 'Kg'),
        new GroceryItem('Atta', 55, 1, 'Kg'),
    ];

    getPurchasingItems() {
        return this.gloceries.slice();
    }

    getPurchasingItem(index: number) {
        return this.gloceries[index];
    }

    addToPurchasingList(item: GroceryItem) {
        this.gloceries.push(item);
        this.changeGloceries.next(this.gloceries.slice());
    }

    removeFromPurchasingList(index: number) {
        this.gloceries.splice(index, 1);
        this.changeGloceries.next(this.gloceries.slice());
    }

    updatePurchasingItem(index: number, updatedItem: GroceryItem) {
        this.gloceries[index] = updatedItem;
        this.changeGloceries.next(this.gloceries.slice());
    }
}