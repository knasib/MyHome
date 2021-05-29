import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, switchMap } from "rxjs/Operators";
import { Actions, Effect, ofType } from "@ngrx/effects";

import * as ChartActions from './doughnut-chart.actions';
import * as env from '../../../../environments/environment';

@Injectable()
export class DoughnutChartEffect {

    @Effect()
    getChartData = this.actions$.pipe(
        ofType(ChartActions.GET_CURR_MONTH_DOUGHNUT_CHARTDATA),
        switchMap((_: ChartActions.GetDoughnutChartData) => {
            return this.http.get<ChartActions.DoughnutDataType>(
                `${env.environment.baseUrl}/families/${localStorage.getItem("familyName")}/charts/doughnut`
            )
            .pipe(
                map((chartData) => {
                    return new ChartActions.SetDoughnutChartData(chartData);
                })
            )
        })
    );

    @Effect()
    getChartDataForSpcMonth = this.actions$.pipe(
        ofType(ChartActions.GET_SPC_MONTH_DOUGHNUT_CHARTDATA),
        switchMap((action: ChartActions.GetDoughnutChartDataForASpcMonth) => {
            let params = new HttpParams();
            params = params.append('yearmonth', action.payload);
            return this.http.get<ChartActions.DoughnutDataType>(
                `${env.environment.baseUrl}/families/${localStorage.getItem("familyName")}/charts/doughnut`,
                {
                    params: params
                }
            )
            .pipe(
                map((chartData) => {
                    return new ChartActions.SetDoughnutChartData(chartData);
                })
            )
        })
    );

    constructor(private actions$: Actions,
        private http: HttpClient) {}
}