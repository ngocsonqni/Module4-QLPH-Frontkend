import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {RouterModule} from '@angular/router';
import {ShareModule} from '../shares/share.module';
import {MaterialModule} from '../shares/material.module';
import {NotificationCustomComponent, SearchRoomComponent} from './search-room/search-room.component';
import {TestComponent} from './test/test.component';
import {DialogComponent, NotificationComponent} from './notification/notification.component';
import {ReportComponent} from './report/report.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [SearchRoomComponent, TestComponent, NotificationComponent, ReportComponent, DialogComponent, NotificationCustomComponent],
  exports: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    ShareModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule
  ], providers: []
})
export class UserModule {
}
