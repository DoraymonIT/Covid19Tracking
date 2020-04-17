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
  cheminImage: any = "assets/images/virus2.png";
  cheminImage1: any = "assets/images/search1.png";


  searching(countryName: string) {
    this.cs.serach(countryName).subscribe(
      data => {

        console.log(data);
        this.searchingData.push(data);
        this.countryName="";

      },
      err => console.error(err),
      () => console.log('done loading data4')


    );
    var c =  document.getElementById('clear');
    c.style.display='block';

  }
  clearing(){
   var c =  document.getElementById('clear');
   c.style.display='none';
    this.searchingData = [];
  }

}
