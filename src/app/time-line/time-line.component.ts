import { Component, OnInit } from '@angular/core';
import { CasesService } from '../controller/service/cases.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {


   public caseees: any[]=[];
   constructor(private cs : CasesService) { }

   ngOnInit(): void {
      this.findAL4L();
   }
   findAL4L() {
     this.cs.findAll4().subscribe(
        data => {
          console.log(data);
          this.caseees.push(data)
        },
       err => console.error(err),
        () => console.log('done loading data4')
      );
    }
}
