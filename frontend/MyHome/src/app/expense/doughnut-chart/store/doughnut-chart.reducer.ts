import { Label, MultiDataSet } from "ng2-charts";

import * as ChartActions from './doughnut-chart.actions';


export interface State {
    labels: string[],
    data: number[]
}

const initialState: State = {
    labels: [],
    data: []
}

export function doughnutChartReducer(state: State = initialState, 
    action: ChartActions.DoughnutActions) {

    switch(action.type) {
        case ChartActions.SET_CURR_MONTH_DOUGHNUT_CHARTDATA:
            return {
                ...state,
                labels: action.payload.labels,
                data: action.payload.data
            }
        case ChartActions.CLEAR_DOUGHNUT_CHARTDATA:
            return {
                ...state,
                labels: [],
                data: [],
            }
        default:
            return state;    
    }

}