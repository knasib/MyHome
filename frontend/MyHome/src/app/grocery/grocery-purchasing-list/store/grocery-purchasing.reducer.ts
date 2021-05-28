import { GroceryItem } from "src/app/shared/models/grocery.item.model";
import * as actions from './grocery-purchasing.actions';

export interface State {
    Groceries: GroceryItem[]
}

const initialState: State = {
    Groceries: []
};

export function gloceryPurchasingReducer(state = initialState, action: actions.GroceryPurchasingItemsAction) {
    switch(action.type) {
        case actions.EMPTY_LIST:
            return {
                Groceries: []
            }
        case actions.GET_PURCHASING_GROCERIES:
            return {
                ...state
            }
        case actions.SET_PURCHASING_GROCERIES:
            return {
                ...state,
                Groceries: action.payload
            }   
        case actions.ADD_PURCHASING_GLOCERY:
            return {
                ...state,
                Groceries: [...state.Groceries, action.payload]
            }
        case actions.UPDATE_PURCHASING_GLOCERY:
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
        case actions.DELETE_PURCHASING_GLOCERY:
            return {
                ...state,
                Groceries: state.Groceries.filter((grocery, index) => {
                    return index !== action.payload;
                })
            }
        default:
            return state;                
    }

}