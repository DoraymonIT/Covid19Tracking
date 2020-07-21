import { Component, OnInit } from '@angular/core';
import { CasesService } from '../controller/service/cases.service';

@Component({
  selector: 'app-circle-bar',
  templateUrl: './circle-bar.component.html',
  styleUrls: ['./circle-bar.component.css']
})
export class CircleBarComponent implements OnInit {

  public caseees: any[]=[];
  public totalCases:number;
    constructor(private cs : CasesService) { }

    ngOnInit(): void {
      this.findAL2L();
    }

   get Caseees(): any[] {
    return this.cs.caseees;
}
    findAL2L() {
      this.cs.findAll2();
     }
  public chartType: string = 'pie';

  public chartDatasets: Array<any> = [
    { data: [4174136,1468800,283586], label: 'Stats of Morocco ' }


  ];

  public chartLabels: Array<any> = ['Total Cases', 'Recovered', 'Deaths'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#FDB45C','green','red'],
      hoverBackgroundColor: [ '#FFC870','green','red'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true,


  };
  public chartClicked(e: any): void {  }
  public chartHovered(e: any): void { }

}
