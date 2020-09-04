import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminRoutingModule} from './admin/admin-routing.module';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {UserComponent} from './user/user.component';
import {UserRoutingModule} from './user/user-routing.module';
import {AdminComponent} from './admin/admin.component';
import {ManagementNewBookingComponent} from './admin/management-new-booking/management-new-booking.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [{
      path: 'new-booking', component: ManagementNewBookingComponent
    }]
  },
  {
    path: 'user', component: UserComponent},

  {
    path: '**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminRoutingModule, UserRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
