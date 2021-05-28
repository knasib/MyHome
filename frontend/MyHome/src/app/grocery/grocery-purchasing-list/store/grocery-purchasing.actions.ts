import { Action } from "@ngrx/store";
import { GroceryItem } from "src/app/shared/models/grocery.item.model";

export const EMPTY_LIST = "[grocery] Empty list";
export const GET_PURCHASING_GROCERIES = "[grocery] Get grocery Purchasing items";
export const SET_PURCHASING_GROCERIES = "[grocery] Set grocery Purchasing items";
export const ADD_PURCHASING_GLOCERY = "[grocery] Add grocery Purchasing item";
export const UPDATE_PURCHASING_GLOCERY = "[grocery] Update grocery Purchasing item";
export const DELETE_PURCHASING_GLOCERY = "[grocery] Delete grocery Purchasing item";

export class EmptyList implements Action {
    readonly type = EMPTY_LIST;
}
export class GetPurchasingGroceries implements Action {
    readonly type = GET_PURCHASING_GROCERIES;
}
export class SetPurchasingGroceries implements Action {
    readonly type = SET_PURCHASING_GROCERIES;
    constructor(public payload: GroceryItem[]){}
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
    | EmptyList
    | GetPurchasingGroceries
    | SetPurchasingGroceries
    | AddPurchasingGrocery
    | UpdatePurchasingGrocery
    | DeletePurchasingGrocery;
