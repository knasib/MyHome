import { ActionReducerMap } from '@ngrx/store';
import * as membersReducer from '../member/store/members.reducer';
import * as purchasingGroceryReducer from '../grocery/grocery-purchasing-list/store/grocery-purchasing.reducer';
import * as purchasedGroceryReducer from '../grocery/grocery-purchased-list/store/grocery-purchased.reducer';
import * as signUpReducer from '../auth/signup/store/signup.reducer';
import * as loginReducer from '../auth/login/store/login.reducer';
import * as doughnutChartReducer from '../expense/doughnut-chart/store/doughnut-chart.reducer';
import * as barChartReducer from '../expense/monthly-barchart/store/bar-chart.reducer';


export interface AppState {
    signup: signUpReducer.State;
    login: loginReducer.State;
    members: membersReducer.State;
    purchasingGroceries: purchasingGroceryReducer.State;
    purchasedGroceries: purchasedGroceryReducer.State;
    dougnutchart: doughnutChartReducer.State;
    barchart: barChartReducer.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    signup: signUpReducer.signUpReducer,
    login: loginReducer.loginReducer,
    members: membersReducer.membersReducer,
    purchasingGroceries: purchasingGroceryReducer.gloceryPurchasingReducer,
    purchasedGroceries: purchasedGroceryReducer.gloceryPurchasedReducer,
    dougnutchart: doughnutChartReducer.doughnutChartReducer,
    barchart: barChartReducer.barChartReducer,
}