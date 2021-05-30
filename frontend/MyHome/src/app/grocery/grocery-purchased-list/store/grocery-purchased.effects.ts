import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/Operators";
import { GroceryItem } from "src/app/shared/models/grocery.item.model";

import * as PurchasedActions from './grocery-purchased.actions';
import * as env from '../../../../environments/environment';
import { of } from "rxjs";

@Injectable()
export class PurchasedGloceryEffect {

    @Effect({dispatch: false})
    purchasedGroceries = this.actions$.pipe(
        ofType(PurchasedActions.PURCHASE_PURCHASED_GROCERIES),
        switchMap((data: PurchasedActions.PurchasedGroceries) => {
            return this.http.post<GroceryItem[]>(
                `${env.environment.baseUrl}/families/${localStorage.getItem("familyName")}/purchased`, 
                data.payload,
                {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json'
                    })
                }
            )
            .pipe(
                map(() => {
                    return new PurchasedActions.DeletePurchasedGroceries();
                }),
                catchError((err) => {
                    return of(new PurchasedActions.AddToPurchasedList(data.payload));
                })
            )
        })
    );

    constructor(private actions$: Actions,
        private http: HttpClient) {}
}