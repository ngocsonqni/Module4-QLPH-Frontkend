import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {ListUsersComponent} from './list-users/list-users.component';
import {CreateUserComponent} from './create-user/create-user.component';


const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path: 'list-users', component: ListUsersComponent},
      {path: 'create-users', component: CreateUserComponent},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AdminRoutingModule {
}
