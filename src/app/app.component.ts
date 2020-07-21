import { Component ,OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Chart, ChartOptions, ChartType } from 'chart.js';
import { Labels } from 'ng-chartjs';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { CasesService } from './controller/service/cases.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public countryName:  string;
  public searchingData: any[] = [];
  constructor(private cs: CasesService) { }
  public ngOnInit() {

  }

  public ngAfterViewInit() {

  }
  cheminImage: any = "assets/images/virus2.png";
  cheminImage1: any = "assets/images/search1.png";


  searching(countryName: string) {
    this.cs.serach(countryName).subscribe(
      data => {

        console.log(data);
        this.searchingData.push(data);
        this.countryName="";

      },
      err => console.error(err),
      () => console.log('done loading data4')


    );
    var c =  document.getElementById('clear');
    c.style.display='block';

  }
  clearing(){
   var c =  document.getElementById('clear');
   c.style.display='none';
    this.searchingData = [];
  }

}
