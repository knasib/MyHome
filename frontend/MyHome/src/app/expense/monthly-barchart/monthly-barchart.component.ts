import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Subscription } from 'rxjs';

import * as fromApp from '../../store/app.reducer';
import * as ChartActions from './store/bar-chart.actions';
import * as DoughnutChartActions from '../doughnut-chart/store/doughnut-chart.actions';

@Component({
  selector: 'app-monthly-barchart',
  templateUrl: './monthly-barchart.component.html',
  styleUrls: ['./monthly-barchart.component.css']
})
export class MonthlyBarchartComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  barChartOptions: ChartOptions = {
    responsive: true,
    //maintainAspectRatio: false
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: '' }
  ];


  constructor(private store: Store<fromApp.AppState>) { }


  ngOnInit(): void {
    this.store.dispatch(new ChartActions.GetBarChartData());
    this.subscription = this.store.select("barchart").subscribe((chartData) => {
      this.barChartLabels = chartData.labels;
      this.barChartData = [{
        data: chartData.data, 
        label: 'Current Year Monthly Expense'
      }];

    });
  }

  chartClicked(event: any) {
    if (event.active.length > 0) {
      const chart = event.active[0]._chart;
      const activePoints = chart.getElementAtEvent(event.event);
        if ( activePoints.length > 0) {
          const clickedElementIndex = activePoints[0]._index;
          const label = chart.data.labels[clickedElementIndex];
          
          this.store.dispatch(new DoughnutChartActions.GetDoughnutChartDataForASpcMonth(label));
        }
      }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
