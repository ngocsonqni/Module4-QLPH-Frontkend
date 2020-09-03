import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {AdminModule} from './admin/admin.module';
import {ShareModule} from './shares/share.module';
import {MaterialModule} from './shares/material.module';
import {UserComponent} from './user/user.component';
import {UserModule} from './user/user.module';
import {EmployeeModule} from './employee/employee.module';
import {EmployeeComponent} from './employee/employee.component';

import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth/auth-interceptor';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeeComponent,
    UserComponent,
    PagenotfoundComponent,
      ],
    imports: [
        AdminModule,
        EmployeeModule,
        ShareModule,
        AppRoutingModule,
        MaterialModule,
        UserModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 2000,
            positionClass: 'toast-top-center'
        }),
        NgbDropdownModule,
      SocialLoginModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'clientId'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId'),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
