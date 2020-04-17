import { Component, OnInit } from '@angular/core';
import { CasesService } from '../controller/service/cases.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-bar1',
  templateUrl: './side-bar1.component.html',
  styleUrls: ['./side-bar1.component.css']
})
export class SideBar1Component implements OnInit {


  public caseees: any[] = [];

  public cy: any[] = [];
  constructor(private cs: CasesService) {

  }
  ngOnInit(): void {


    this.findALL();
  }
  searchText: string = '';
  seraching(values: string) {
    this.cs.serach(values).subscribe(
      data => {
        console.log(data);
        this.cy.push(data)

      },
      err => console.error(err),
      () => console.log('done loading data5')
    );
  }
  findALL() {
    this.cs.findAll().subscribe(
      data => {
        console.log(data);
        this.caseees.push(data)
      },
      err => console.error(err),
      () => console.log('done loading data')
    );
  }

}
