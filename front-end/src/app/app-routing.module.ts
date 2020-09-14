import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminRoutingModule} from './admin/admin-routing.module';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {UserComponent} from './user/user.component';
import {UserRoutingModule} from './user/user-routing.module';
import {AdminComponent} from './admin/admin.component';
import {ManagementNewBookingComponent} from './admin/management-new-booking/management-new-booking.component';
import {SearchRoomComponent} from './user/search-room/search-room.component';
import {RoomComponent} from './admin/room/room.component';
import {TestComponent} from './user/test/test.component';
import {NotificationComponent} from './user/notification/notification.component';
import {ReportComponent} from './user/report/report.component';
import {ListUserComponent} from './admin/list-user/list-user.component';
import {CreateUserComponent} from './admin/create-user/create-user.component';
import {UserLoginComponent} from './user/user-login/user-login.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'new-booking', component: ManagementNewBookingComponent
      },
      {
        path: 'room', component: RoomComponent
      },
      {
        path: 'list-user', component: ListUserComponent,
      },
      {
        path: 'create-user', component: CreateUserComponent
      }
      ]
  },
  {
    path: 'user', component: UserComponent,
    children: [
      {
        path: 'search-room', component: SearchRoomComponent
      },
      {
        path: 'test', component: TestComponent
      },
      {
        path: 'notification', component: NotificationComponent
      },
      {
        path: 'report', component: ReportComponent
      }
    ]
  },
  {path: '', component: UserLoginComponent},
  {
    path: '**', component: PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminRoutingModule, UserRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
