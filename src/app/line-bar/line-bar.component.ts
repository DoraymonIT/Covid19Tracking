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
    { data: [0,1,0,0,1,2,1,8,11,17,20,32], label: 'Cases' },
    { data: [0, 0, 1, 1, 6, 7, 0], label: 'Recovered' },
    { data: [0, 0, 0, 0, 0, 0, 1], label: 'Deaths' }
  ];

  public chartLabels: Array<any> = ['01/03', '02/03', '03/03','04/03', '05/03', '06/03','07/03','08/03','09/03','10/03','11/03','12/03','13/03','14/03',
  '15/03', '16/03', '17/03','18/03','19/03','20/03','21/03','22/03','23/03','24/03','25/03',
  '26/03','27/03','28/03','29/03','30/03','31/03','01/04','02/04','03/04','04/04','05/04','06/04','07/04','08/04','09/04','10/04',
  '11/04','12/04','13/04','14/04','15/04','16/04','17/04','18/04','19/04','20/04','21/04','22/04'];

  public chartColors: Array<any> = [
    {

      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 3,
    },
    {

      borderColor: 'green',
      borderWidth: 3,
    },
    {

      borderColor: 'red',
      borderWidth: 3,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}

