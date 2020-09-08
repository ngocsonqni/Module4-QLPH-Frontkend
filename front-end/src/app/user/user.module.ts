import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {RouterModule} from '@angular/router';
import {ShareModule} from '../shares/share.module';
import {MaterialModule} from '../shares/material.module';
import {SearchRoomComponent} from './search-room/search-room.component';
import {TestComponent} from './test/test.component';
import {ConfirmComponent, DialogComponent, NotificationComponent} from './notification/notification.component';
import {ConfirmReportComponent, ReportComponent} from './report/report.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSortModule} from '@angular/material/sort';
// import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {NgxMatDatetimePickerModule} from '@angular-material-components/datetime-picker';


@NgModule({
  declarations: [SearchRoomComponent, TestComponent, NotificationComponent, ReportComponent,
    DialogComponent, ConfirmComponent, ConfirmReportComponent],
  exports: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    ShareModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSortModule,
    // NgxMatSelectSearchModule,
    NgxMatDatetimePickerModule
  ], providers: []
})
export class UserModule {
}
