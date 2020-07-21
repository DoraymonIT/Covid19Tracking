import { Component, OnInit } from '@angular/core';
import { CasesService } from '../controller/service/cases.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  public countryName:  string;
  public searchingData: any[] = [];
  constructor(private cs: CasesService) { }

  ngOnInit(): void {
    // this.searching(this.countryName);

  }


}
