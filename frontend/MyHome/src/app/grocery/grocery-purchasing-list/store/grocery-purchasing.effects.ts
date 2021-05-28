import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/Operators";

import * as actions from './grocery-purchasing.actions';
import * as env from '../../../../environments/environment';
import { GroceryItem } from "src/app/shared/models/grocery.item.model";

@Injectable()
export class PurchasingGloceryEffect {

    @Effect()
    getItems = this.actions$.pipe(
        ofType(actions.GET_PURCHASING_GROCERIES),
        switchMap((data: actions.GetPurchasingGroceries) => {
            return this.http.get<GroceryItem[]>(
                `${env.environment.baseUrl}/families/${localStorage.getItem("familyName")}/purchasing`
                )
                .pipe(
                    map((items) => {
                        return new actions.SetPurchasingGroceries(items);
                    })
                )
        })
    );

    constructor(private actions$: Actions,
        private http: HttpClient) {}
}