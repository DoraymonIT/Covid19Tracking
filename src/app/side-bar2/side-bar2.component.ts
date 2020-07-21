import { Component, OnInit } from '@angular/core';
import { CasesService } from '../controller/service/cases.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-side-bar2',
  templateUrl: './side-bar2.component.html',
  styleUrls: ['./side-bar2.component.css']
})
export class SideBar2Component implements OnInit {


  constructor(private cs : CasesService) { }

  ngOnInit(): void {
    this.findAL2L();
  }
  findAL2L() {
    this.cs.findAll2();
   }

   get Caseees(): any[] {
    return this.cs.caseees;
}


}
