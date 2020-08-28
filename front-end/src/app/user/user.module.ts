import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {RouterModule} from '@angular/router';
import {ShareModule} from '../shares/share.module';
import {MaterialModule} from '../shares/material.module';
import localeGB from '@angular/common/locales/vi';
registerLocaleData(localeGB);
@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    ShareModule,
    MaterialModule,
  ], providers: [
    {provide: LOCALE_ID, useValue: 'vi'}

  ]
})
export class UserModule {
}
