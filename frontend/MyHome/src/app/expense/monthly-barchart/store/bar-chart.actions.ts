
export const GET_CURR_YEAR_BAR_CHARTDATA = "[Chart] Get Current Year Bar Chart Data";
export const SET_CURR_YEAR_BAR_CHARTDATA = "[Chart] Set Current Year Bar Chart Data";
export const CLEAR_BAR_CHARTDATA = "[Chart] Clear Bar Chart Data";

export interface BarChartDataType {
    labels: string[], 
    data: number[]
}

export class GetBarChartData {
    readonly type = GET_CURR_YEAR_BAR_CHARTDATA;
}

export class SetBarChartData {
    readonly type = SET_CURR_YEAR_BAR_CHARTDATA;
    constructor(public payload: BarChartDataType){}
}

export class ClearChartData {
    readonly type = CLEAR_BAR_CHARTDATA;
}

export type BarActions = 
    | GetBarChartData
    | SetBarChartData
    | ClearChartData;