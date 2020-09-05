import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SearchRoomComponent} from './search-room/search-room.component';
import {TestComponent} from './test/test.component';

const routes: Routes = [
  {path: 'user/search-room', component: SearchRoomComponent},
  {path: 'user/test', component: TestComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class UserRoutingModule {
}
