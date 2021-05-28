import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Subscription } from 'rxjs';

import * as fromApp from '../../store/app.reducer';
import * as ChartActions from './store/doughnut-chart.actions';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  doughnutChartOpitons: ChartOptions = {
    //responsive: true,
    maintainAspectRatio: false
  }
  doughnutChartLabels: Label[] = [];
  doughnutChartData: MultiDataSet = [
    []
  ];
  doughnutChartType: ChartType = 'doughnut';     

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new ChartActions.GetDoughnutChartData());
    this.subscription = this.store.select("dougnutchart").subscribe((chartData) => {
      console.log(chartData.labels);
      console.log(chartData.data);
      this.doughnutChartLabels = chartData.labels;
      this.doughnutChartData = [chartData.data];

    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
