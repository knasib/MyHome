import * as ChartActions from './bar-chart.actions';


export interface State {
    labels: string[],
    data: number[]
}

const initialState: State = {
    labels: [],
    data: []
}

export function barChartReducer(state: State = initialState, 
    action: ChartActions.BarActions) {

    switch(action.type) {
        case ChartActions.SET_CURR_YEAR_BAR_CHARTDATA:
            return {
                ...state,
                labels: action.payload.labels,
                data: action.payload.data
            }
        case ChartActions.CLEAR_BAR_CHARTDATA:
            return {
                ...state,
                labels: [],
                data: [],
            }
        default:
            return state;    
    }

}