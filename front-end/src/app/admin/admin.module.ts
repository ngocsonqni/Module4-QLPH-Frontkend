import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {FusionChartsModule} from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import {MaterialModule} from '../shares/material.module';
import { ManagementNewBookingComponent } from './management-new-booking/management-new-booking.component';
import { RoomComponent } from './room/room.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatSliderModule} from '@angular/material/slider';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import {RouterModule} from "@angular/router";

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);

@NgModule({
  declarations: [ManagementNewBookingComponent, RoomComponent, ListUserComponent, CreateUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FusionChartsModule,
    FormsModule,
    MaterialModule,
    MatSidenavModule,
    MatTableModule,
    MatSliderModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatButtonModule,
    MatPaginatorModule,
    RouterModule
  ]
})
export class AdminModule {
}
