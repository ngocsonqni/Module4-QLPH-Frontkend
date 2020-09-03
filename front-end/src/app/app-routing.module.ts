import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminRoutingModule} from './admin/admin-routing.module';
import {EmployeeRoutingModule} from './employee/employee-routing.module';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {UserRoutingModule} from './user/user-routing.module';
import {UserLoginComponent} from './user/user-login/user-login.component';

const routes: Routes = [
  {path: '', component: UserLoginComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminRoutingModule, EmployeeRoutingModule, UserRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
