import { Component, OnInit } from '@angular/core';
import { CasesService } from '../controller/service/cases.service';

@Component({
  selector: 'app-side-bar3',
  templateUrl: './side-bar3.component.html',
  styleUrls: ['./side-bar3.component.css']
})
export class SideBar3Component implements OnInit {
  public caseees: any[]=[];
  constructor(private cs : CasesService) { }

  ngOnInit(): void {
     this.findAL3L();
  }
  findAL3L() {
    this.cs.findAll3().subscribe(
       data => {
         console.log(data);
         this.caseees.push(data)
       },
      err => console.error(err),
       () => console.log('done loading data3')
     );
   }
}
