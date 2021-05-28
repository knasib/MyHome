import { Action } from "@ngrx/store";
import { GroceryItem } from "src/app/shared/models/grocery.item.model";

export const PURCHASE_PURCHASED_GLOCERIES = "[grocery] PURCHASE grocery Purchased items";
export const GET_PURCHASED_GLOCERIES = "[grocery] Get grocery Purchased items";
export const ADD_PURCHASED_GLOCERY = "[grocery] Add grocery Purchased item";
export const UPDATE_PURCHASED_GLOCERY = "[grocery] Update grocery Purchased item";
export const DELETE_PURCHASED_GLOCERY = "[grocery] Delete grocery Purchased item";
export const DELETE_PURCHASED_GLOCERIES = "[grocery] Delete grocery Purchased items";

export class PurchasedGloceries implements Action {
    readonly type = PURCHASE_PURCHASED_GLOCERIES;
    constructor(public payload: GroceryItem[]) {
    }
}
export class GetPurchasedGloceries implements Action {
    readonly type = GET_PURCHASED_GLOCERIES;
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

export class DeletePurchasedGloceries implements Action {
    readonly type = DELETE_PURCHASED_GLOCERIES;
}

export type GroceryPurchasedItemsAction = 
    | PurchasedGloceries
    | GetPurchasedGloceries
    | AddPurchasedGrocery
    | UpdatePurchasedGrocery
    | DeletePurchasedGrocery
    | DeletePurchasedGloceries;