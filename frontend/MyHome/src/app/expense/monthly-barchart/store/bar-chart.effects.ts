import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, switchMap } from "rxjs/Operators";
import { Actions, Effect, ofType } from "@ngrx/effects";

import * as ChartActions from './bar-chart.actions';
import * as env from '../../../../environments/environment';

@Injectable()
export class BarChartEffect {

    @Effect()
    getChartData = this.actions$.pipe(
        ofType(ChartActions.GET_CURR_YEAR_BAR_CHARTDATA),
        switchMap((_: ChartActions.GetBarChartData) => {
            return this.http.get<ChartActions.BarChartDataType>(
                `${env.environment.baseUrl}/families/${localStorage.getItem("familyName")}/charts/barchart`
            )
            .pipe(
                map((chartData) => {
                    return new ChartActions.SetBarChartData(chartData);
                })
            )
        })
    );

    constructor(private actions$: Actions,
        private http: HttpClient) {}
}