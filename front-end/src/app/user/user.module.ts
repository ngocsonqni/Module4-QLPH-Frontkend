import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {RouterModule} from '@angular/router';
import {ShareModule} from '../shares/share.module';
import {MaterialModule} from '../shares/material.module';
import {NotificationComponent, SearchRoomComponent} from './search-room/search-room.component';
import {TestComponent} from './test/test.component';


@NgModule({
  declarations: [SearchRoomComponent, TestComponent, NotificationComponent],
  exports: [],
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
