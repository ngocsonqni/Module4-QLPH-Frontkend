
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeRoutingModule} from './employee-routing.module';
import {RouterModule} from '@angular/router';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from '../shares/material.module';
import {MatDialogModule} from '@angular/material/dialog';
import {ShareModule} from '../shares/share.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {NgxPaginationModule} from 'ngx-pagination';
// @ts-ignore
import {AngularFireModule} from '@angular/fire';
// @ts-ignore
import {AngularFireStorageModule} from '@angular/fire/storage';
// @ts-ignore
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {MatPaginatorModule} from '@angular/material/paginator';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FacebookModule} from 'ngx-facebook';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {NgSelectModule} from '@ng-select/ng-select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  exports: [],

  imports: [
    CommonModule,
    EmployeeRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    HttpClientModule,
    NgbModule,
    MaterialModule,
    MatDialogModule,
    ShareModule,
    MatCardModule,
    NgxPaginationModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatPaginatorModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAFbHzEL2J7oXY5bWTF6dA3DnO_iCj5W48',
      authDomain: 'webapp-1b736.firebaseapp.com',
      databaseURL: 'https://webapp-1b736.firebaseio.com',
      projectId: 'webapp-1b736',
      storageBucket: 'webapp-1b736.appspot.com',
      messagingSenderId: '1077539336649',
      appId: '1:1077539336649:web:e5fbf4e6a877218b887818',
      measurementId: 'G-N3YS1JFN9K'
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FacebookModule.forRoot(),
    MatProgressBarModule,
    BrowserAnimationsModule,
    NgSelectModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ]

})

export class EmployeeModule {
}
