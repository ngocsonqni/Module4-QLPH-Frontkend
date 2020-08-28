import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminRoutingModule} from './admin/admin-routing.module';
import {EmployeeRoutingModule} from './employee/employee-routing.module';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {UserComponent} from './user/user.component';
import {UserRoutingModule} from './user/user-routing.module';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminRoutingModule, EmployeeRoutingModule, UserRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
