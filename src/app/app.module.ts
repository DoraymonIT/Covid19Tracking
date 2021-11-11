import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClient,HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { CountToModule } from 'angular-count-to';
import { NgChartjsModule } from 'ng-chartjs';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBar1Component } from './side-bar1/side-bar1.component';
import { SideBar2Component } from './side-bar2/side-bar2.component';
import { SideBar3Component } from './side-bar3/side-bar3.component';
import { CircleBarComponent } from './circle-bar/circle-bar.component';
import { LineBarComponent } from './line-bar/line-bar.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBar1Component,
    SideBar2Component,
    SideBar3Component,
    CircleBarComponent,
    LineBarComponent,
    TimeLineComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartjsModule,
    CountToModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
