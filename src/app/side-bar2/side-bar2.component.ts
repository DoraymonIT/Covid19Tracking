import { Component, OnInit } from '@angular/core';
import { CasesService } from '../controller/service/cases.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-side-bar2',
  templateUrl: './side-bar2.component.html',
  styleUrls: ['./side-bar2.component.css']
})
export class SideBar2Component implements OnInit {
  public caseees: any[]=[];
public totalCases:number;

  constructor(private cs : CasesService) { }

  ngOnInit(): void {
    this.findAL2L();
    $('.md-4').each(function () {
      var $this = $(this);
      jQuery({ Counter: 1 }).animate({ Counter: $this.text() }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter));
        }
      });
    });
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
}
