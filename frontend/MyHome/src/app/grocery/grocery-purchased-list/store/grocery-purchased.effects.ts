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
    purchasedGloceries = this.actions$.pipe(
        ofType(PurchasedActions.PURCHASE_PURCHASED_GLOCERIES),
        switchMap((data: PurchasedActions.PurchasedGloceries) => {
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
                    return new PurchasedActions.DeletePurchasedGloceries();
                }),
                catchError((err) => {
                    console.log(err);
                    return of(new PurchasedActions.AddToPurchasedList(data.payload));
                })
            )
        })
    );

    constructor(private actions$: Actions,
        private http: HttpClient) {}
}