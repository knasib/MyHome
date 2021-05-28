import { ActionReducerMap } from '@ngrx/store';
import * as membersReducer from '../member/store/members.reducer';
import * as purchasingGroceryReducer from '../grocery/grocery-purchasing-list/store/grocery-purchasing.reducer';
import * as purchasedGroceryReducer from '../grocery/grocery-purchased-list/store/grocery-purchased.reducer';
import * as signUpReducer from '../auth/signup/store/signup.reducer';
import * as loginReducer from '../auth/login/store/login.reducer';


export interface AppState {
    signup: signUpReducer.State;
    login: loginReducer.State;
    members: membersReducer.State;
    purchasingGloceries: purchasingGroceryReducer.State;
    purchasedGloceries: purchasedGroceryReducer.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    signup: signUpReducer.signUpReducer,
    login: loginReducer.loginReducer,
    members: membersReducer.membersReducer,
    purchasingGloceries: purchasingGroceryReducer.gloceryPurchasingReducer,
    purchasedGloceries: purchasedGroceryReducer.gloceryPurchasedReducer
}