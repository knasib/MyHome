import { GroceryItem } from "src/app/shared/models/grocery.item.model";
import * as actions from './grocery-purchasing.actions';

export interface State {
    gloceries: GroceryItem[]
}

const initialState: State = {
    gloceries: []
};

export function gloceryPurchasingReducer(state = initialState, action: actions.GroceryPurchasingItemsAction) {
    switch(action.type) {
        case actions.EMPTY_LIST:
            return {
                gloceries: []
            }
        case actions.GET_PURCHASING_GLOCERIES:
            return {
                ...state
            }
        case actions.SET_PURCHASING_GLOCERIES :
            return {
                ...state,
                gloceries: action.payload
            }   
        case actions.ADD_PURCHASING_GLOCERY:
            return {
                ...state,
                gloceries: [...state.gloceries, action.payload]
            }
        case actions.UPDATE_PURCHASING_GLOCERY:
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
        case actions.DELETE_PURCHASING_GLOCERY:
            return {
                ...state,
                gloceries: state.gloceries.filter((grocery, index) => {
                    return index !== action.payload;
                })
            }
        default:
            return state;                
    }

}