import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {FusionChartsModule} from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FusionChartsModule,
    FormsModule
  ]
})
export class AdminModule {
}
