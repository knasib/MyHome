import { GroceryItem } from "src/app/shared/models/grocery.item.model";
import * as actions from "./grocery-purchased.actions";

export interface State {
    Groceries: GroceryItem[]
}

const initialState: State = {
    Groceries: []
};

export function gloceryPurchasedReducer(state = initialState, action: actions.GroceryPurchasedItemsAction ) {
    switch(action.type) {
        case actions.ADD_TO_PURCHASED_LIST:
            return {
                ...state,
                Groceries: [...state.Groceries, ...action.payload]
            }
        case actions.PURCHASE_PURCHASED_GROCERIES:
            return {
                ...state,
                Groceries: []
            }
        case actions.GET_PURCHASED_GROCERIES:
            return {
                ...state
            }
        case actions.ADD_PURCHASED_GLOCERY:
            return {
                ...state,
                Groceries: [...state.Groceries, action.payload]
            }
        case actions.UPDATE_PURCHASED_GLOCERY:
            const updatedGrocery = {
                ...state.Groceries[action.payload.index],
                ...action.payload.newItem
            }

            const updatedGroceries = [...state.Groceries];
            updatedGroceries[action.payload.index] = updatedGrocery;

            return {
                ...state,
                Groceries: updatedGroceries
            }
        case actions.DELETE_PURCHASED_GLOCERY:
            return {
                ...state,
                Groceries: state.Groceries.filter((grocery, index) => {
                    return index !== action.payload;
                })
            }
        case actions.DELETE_PURCHASED_GROCERIES:
            return {
                ...state,
                Groceries: []
            }    
        default:
            return state; 
    }
}