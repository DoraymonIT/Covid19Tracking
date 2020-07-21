import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  // private _url = 'https://api.thevirustracker.com/free-api?countryTotals=ALL' ;
  private _url = 'https://corona.lmao.ninja/v2/countries?sort=country';
  private _url2='https://corona.lmao.ninja/v2/all';
   private _url3='https://corona.lmao.ninja/v2/countries/morocco';
   private _url4= 'https://moroccostats.herokuapp.com/stats/coronavirus/countries/';
   private _url5= 'https://api.covid19api.com/country/morocco?from=2020-03-02T00:00:00Z&to=2020-05-10T00:00:00ZZ';
   private _url6='https://wrapapi.com/use/kazonovic/covidmaroc/region-fr/latest?wrapAPIKey=F0Nmz7Vv8m9n0PdjU487nLe4jVjyh8tw';

   public caseees: any[]=[];




  constructor(private http: HttpClient) { }
  public serach(countryName : string){
    return this.http.get(this._url4 + countryName);
  }

   public findAll()  {
    return this.http.get(this._url);
  }
  public findAll2(){
    return this.http.get(this._url2).subscribe(
      data => {
        console.log(data);
        this.caseees.push(data)
      },
     eror => console.error(eror),
      () => console.log('done loading data2'+this.caseees)
    );
  }
  public findAll3(){
    return this.http.get(this._url3);
  }
  public findAll4(){
    return this.http.get(this._url5);
  }
  public findAll6(){
    return this.http.get(this._url6);
  }

}
