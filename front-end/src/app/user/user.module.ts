import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {RouterModule} from '@angular/router';
import {ShareModule} from '../shares/share.module';
import {MaterialModule} from '../shares/material.module';
import {SearchRoomComponent} from './search-room/search-room.component';
import { StatisticComponent } from './statistic/statistic.component';


@NgModule({
  declarations: [SearchRoomComponent, StatisticComponent],
  exports: [
    StatisticComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    ShareModule,
    MaterialModule
  ], providers: []
})
export class UserModule {
}
