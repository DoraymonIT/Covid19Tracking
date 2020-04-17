import { Component ,OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Chart, ChartOptions, ChartType } from 'chart.js';
import { Labels } from 'ng-chartjs';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public constructor() { }

  public ngOnInit() {

  }

  public ngAfterViewInit() {

  }


}
