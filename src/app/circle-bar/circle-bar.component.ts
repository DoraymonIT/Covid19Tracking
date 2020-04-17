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
    findAL2L() {
      this.cs.findAll2().subscribe(
         data => {
           console.log(data);
           this.caseees.push(data)
         },
        err => console.error(err),
         () => console.log('done loading data2')
       );
     }
  public chartType: string = 'pie';

  public chartDatasets: Array<any> = [
    { data: [2173107,546272,144943], label: 'Stats of Morocco ' }


  ];

  public chartLabels: Array<any> = ['Total Cases', 'Recovered', 'Deaths'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#FDB45C','green','red'],
      hoverBackgroundColor: [ '#FFC870','green','red'],
      borderWidth: 1,
    }
  ];

  public chartOptions: any = {
    responsive: true,


  };
  public chartClicked(e: any): void {  }
  public chartHovered(e: any): void { }

}
