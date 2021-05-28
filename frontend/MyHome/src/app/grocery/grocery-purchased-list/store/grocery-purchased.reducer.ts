import { GroceryItem } from "src/app/shared/models/grocery.item.model";
import * as actions from "./grocery-purchased.actions";

export interface State {
    gloceries: GroceryItem[]
}

const initialState: State = {
    gloceries: []
};

export function gloceryPurchasedReducer(state = initialState, action: actions.GroceryPurchasedItemsAction ) {
    switch(action.type) {
        case actions.ADD_TO_PURCHASED_LIST:
            return {
                ...state,
                gloceries: [...state.gloceries, ...action.payload]
            }
        case actions.PURCHASE_PURCHASED_GLOCERIES:
            return {
                ...state,
                gloceries: []
            }
        case actions.GET_PURCHASED_GLOCERIES:
            return {
                ...state
            }
        case actions.ADD_PURCHASED_GLOCERY:
            return {
                ...state,
                gloceries: [...state.gloceries, action.payload]
            }
        case actions.UPDATE_PURCHASED_GLOCERY:
            const updatedGrocery = {
                ...state.gloceries[action.payload.index],
                ...action.payload.newItem
            }

            const updatedGloceries = [...state.gloceries];
            updatedGloceries[action.payload.index] = updatedGrocery;

            return {
                ...state,
                gloceries: updatedGloceries
            }
        case actions.DELETE_PURCHASED_GLOCERY:
            return {
                ...state,
                gloceries: state.gloceries.filter((grocery, index) => {
                    return index !== action.payload;
                })
            }
        case actions.DELETE_PURCHASED_GLOCERIES:
            return {
                ...state,
                gloceries: []
            }    
        default:
            return state; 
    }
}