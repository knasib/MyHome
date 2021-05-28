
export const GET_CURR_MONTH_DOUGHNUT_CHARTDATA = "[Chart] Get Current Month Doughnut Chart Data";
export const SET_CURR_MONTH_DOUGHNUT_CHARTDATA = "[Chart] Set Current Month Doughnut Chart Data";
export const CLEAR_DOUGHNUT_CHARTDATA = "[Chart] Clear Doughnut Chart Data";

export interface DougnutDataType {
    labels: string[], 
    data: number[]
}

export class GetDoughnutChartData {
    readonly type = GET_CURR_MONTH_DOUGHNUT_CHARTDATA;
}

export class SetDoughnutChartData {
    readonly type = SET_CURR_MONTH_DOUGHNUT_CHARTDATA;
    constructor(public payload: DougnutDataType){}
}

export class ClearChartData {
    readonly type = CLEAR_DOUGHNUT_CHARTDATA;
}

export type DoughnutActions = 
    | GetDoughnutChartData
    | SetDoughnutChartData
    | ClearChartData;