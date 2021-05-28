import { Action } from "@ngrx/store";
import { GroceryItem } from "src/app/shared/models/grocery.item.model";

export const PURCHASE_PURCHASED_GROCERIES = "[grocery] PURCHASE grocery Purchased items";
export const GET_PURCHASED_GROCERIES = "[grocery] Get grocery Purchased items";
export const ADD_PURCHASED_GLOCERY = "[grocery] Add grocery Purchased item";
export const UPDATE_PURCHASED_GLOCERY = "[grocery] Update grocery Purchased item";
export const DELETE_PURCHASED_GLOCERY = "[grocery] Delete grocery Purchased item";
export const DELETE_PURCHASED_GROCERIES = "[grocery] Delete grocery Purchased items";
export const ADD_TO_PURCHASED_LIST = "[grocery] Add to Purchase List";

export class AddToPurchasedList implements Action {
    readonly type = ADD_TO_PURCHASED_LIST;
    constructor(public payload: GroceryItem[]) {
    }
}
export class PurchasedGroceries implements Action {
    readonly type = PURCHASE_PURCHASED_GROCERIES;
    constructor(public payload: GroceryItem[]) {
    }
}
export class GetPurchasedGroceries implements Action {
    readonly type = GET_PURCHASED_GROCERIES;
}
export class AddPurchasedGrocery implements Action {
    readonly type = ADD_PURCHASED_GLOCERY;
    constructor(public payload: GroceryItem) {}
}
export class UpdatePurchasedGrocery implements Action {
    readonly type = UPDATE_PURCHASED_GLOCERY;
    constructor(public payload: {index: number, newItem: GroceryItem}) {}
}
export class DeletePurchasedGrocery implements Action {
    readonly type = DELETE_PURCHASED_GLOCERY;
    constructor(public payload: number) {}
}

export class DeletePurchasedGroceries implements Action {
    readonly type = DELETE_PURCHASED_GROCERIES;
}

export type GroceryPurchasedItemsAction = 
    | AddToPurchasedList
    | PurchasedGroceries
    | GetPurchasedGroceries
    | AddPurchasedGrocery
    | UpdatePurchasedGrocery
    | DeletePurchasedGrocery
    | DeletePurchasedGroceries;