import {Component, ContentChild, OnInit, ViewChild} from '@angular/core';

import {UserNotification} from '../models/user/user-notification';
import {NotificationService} from '../services/notification/notification.service';
import {User} from '../models/user/user';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent, NotificationComponent} from './notification/notification.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],

})
export class UserComponent implements OnInit {
  notSeenList: UserNotification[] = [];
  user: User;
  time: Date = new Date();
  component: any;

  constructor(public notificationService: NotificationService, private matDialog: MatDialog) {
    this.user = new User(1, 'Ngoc Thach');
  }

  ngOnInit(): void {
    this.notificationService.getAllByDeleteFlagIsFalse(this.user.id).subscribe(
      res => {
        this.notSeenList = res;
        this.notSeenList.forEach(item => {
          item.notification.requestDate = new Date(item.notification.requestDate);
        });
      },
      error => {
      }
    );
  }

  getTime(): void {
    this.time = new Date();
  }

  getDataDiff(startDate: Date, endDate: Date): { hour: number; day: number; minute: number; second: number } {
    const diff = endDate.getTime() - startDate.getTime();
    const days = Math.floor(diff / (60 * 60 * 24 * 1000));
    const hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
    const minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
    const seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
    return {day: days, hour: hours, minute: minutes, second: seconds};
  }

  openNotificationInfor(userNotification: UserNotification): void {
    const dialogRef = this.matDialog.open(DialogComponent, {
      width: '800px',
      data: userNotification,
      panelClass: 'matDialog',
    });

    if (userNotification.seen === false) {
      this.notificationService.markAsSeenById(userNotification.id).subscribe(
        res => {
          this.ngOnInit();
          this.onActivate(this.component);

        },
        error => {
        }
      );
    }
  }

  onActivate(componentRef): void{
    this.component = componentRef;
    componentRef.ngOnInit();
  }
}
