import { Action } from "@ngrx/store";
import { GroceryItem } from "src/app/shared/models/grocery.item.model";

export const PURCHASE_PURCHASING_GLOCERIES = "[grocery] PURCHASE grocery Purchasing items";
export const GET_PURCHASING_GLOCERIES = "[grocery] Get grocery Purchasing items";
export const ADD_PURCHASING_GLOCERY = "[grocery] Add grocery Purchasing item";
export const UPDATE_PURCHASING_GLOCERY = "[grocery] Update grocery Purchasing item";
export const DELETE_PURCHASING_GLOCERY = "[grocery] Delete grocery Purchasing item";

export class PurchasePurchasingGloceries implements Action {
    readonly type = PURCHASE_PURCHASING_GLOCERIES;
}
export class GetPurchasingGloceries implements Action {
    readonly type = GET_PURCHASING_GLOCERIES;
}
export class AddPurchasingGrocery implements Action {
    readonly type = ADD_PURCHASING_GLOCERY;
    constructor(public payload: GroceryItem) {}
}
export class UpdatePurchasingGrocery implements Action {
    readonly type = UPDATE_PURCHASING_GLOCERY;
    constructor(public payload: {index: number, newItem: GroceryItem}) {}
}
export class DeletePurchasingGrocery implements Action {
    readonly type = DELETE_PURCHASING_GLOCERY;
    constructor(public payload: number) {}
}

export type GroceryPurchasingItemsAction = 
    | PurchasePurchasingGloceries
    | GetPurchasingGloceries
    | AddPurchasingGrocery
    | UpdatePurchasingGrocery
    | DeletePurchasingGrocery;
