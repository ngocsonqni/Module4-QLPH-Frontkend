import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {RouterModule} from '@angular/router';
import {ShareModule} from '../shares/share.module';
import {MaterialModule} from '../shares/material.module';
import localeGB from '@angular/common/locales/vi';
import { UserLoginComponent } from './user-login/user-login.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
registerLocaleData(localeGB);
@NgModule({
  declarations: [UserLoginComponent],
  exports: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    ShareModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    NgbDropdownModule
  ], providers: [
    {provide: LOCALE_ID, useValue: 'vi'}

  ]
})
export class UserModule {
}
