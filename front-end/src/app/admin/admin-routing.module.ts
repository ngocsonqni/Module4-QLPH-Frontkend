import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RoomComponent} from './room/room.component';
import {AdminComponent} from './admin.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      {path: 'room', component: RoomComponent}
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
