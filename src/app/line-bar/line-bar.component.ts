import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-bar',
  templateUrl: './line-bar.component.html',
  styleUrls: ['./line-bar.component.css']
})
export class LineBarComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [28,29,38,49,63,77,96,115,143,170,225,275,345,402,479,556,
    617,654], label: 'Cases' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Recovered' },
    { data: [0, 39, 12, 90, 34, 112, 15], label: 'Deaths' }
  ];

  public chartLabels: Array<any> = ['15/03', '16/03', '17/03','18/03','19/03','20/03','21/03','22/03','23/03','24/03','25/03',
  '26/03','27/03','28/03','29/03','30/03','31/03','01/04','02/04','03/04','04/04','05/04','06/04','07/04','08/04','09/04','10/04',
  '11/04','12/04','13/04','14/04'];

  public chartColors: Array<any> = [
    {

      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {

      borderColor: 'green',
      borderWidth: 2,
    },
    {

      borderColor: 'red',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}

