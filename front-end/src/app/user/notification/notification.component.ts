import {AfterViewInit, Component, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import {UserNotification} from '../../models/user/user-notification';
import {MatSort, MatSortable, Sort} from '@angular/material/sort';
import {Router} from '@angular/router';
import {CustomPaginationService} from '../../services/pagination/custom-pagination.service';
import {Pageable} from '../../models/pagination/pageable';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {Page} from '../../models/pagination/page';
import {User} from '../../models/user/user';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MySort} from '../../models/pagination/sort';
import {NotificationService} from '../../services/notification/notification.service';
import {Room} from '../../models/room';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  page: Page<UserNotification> = new Page<UserNotification>();
  pageable: Pageable = new Pageable();
  userNotificationList: UserNotification[];
  dataSource: MatTableDataSource<UserNotification>;
  displayedColumns: string[] = ['seen', 'content', 'status', 'requestDate', 'repondDate'];
  user: User;


  constructor(private notificationService: NotificationService, private router: Router, private dialog: MatDialog,
              private snackBar: MatSnackBar) {

  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.user = new User(1, 'Ngoc Thach');
    this.pageable.mySort = new MySort('requestDate', 'desc');
    this.paginator._intl.itemsPerPageLabel = 'Số lượng hiển thị';
    this.notificationService.getAll(this.user, this.pageable).subscribe(
      res => {
        this.page = res;
        console.log(res);
        this.userNotificationList = res.content;
        this.dataSource = new MatTableDataSource<UserNotification>(this.userNotificationList);

        this.dataSource.sortingDataAccessor = (item, property) => {
          switch (property) {
            case 'content': {
              return item.notification.content;
              break;
            }
            case 'requestDate': {
              return item.notification.requestDate;
              break;
            }
            case 'repondDate': {
              return item.notification.repondDate;
              break;
            }
          }
        };

        setTimeout(() => {
          this.dataSource.sort = this.sort;
        }, 0);
      }, error => {

      }
    );
  }

  openDialog(userNotification: UserNotification): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '800px',
      data: userNotification,
      panelClass: 'matDialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    if (userNotification.seen === false) {
      this.notificationService.markAsSeenById(userNotification.id).subscribe(
        res => {
          this.ngOnInit();
        },
        error => {
        }
      );
    }

  }


  markSeen(id: any): void {
    this.notificationService.markAsSeenById(id).subscribe(
      res => {
        this.ngOnInit();
        this.openSnackBar('Thành công', 'Đánh dấu đã đọc');
      }, error => {
      }
    );
  }

  deleteNotificationById(id: any): void {
    this.notificationService.deleteById(id).subscribe(
      res => {
        if (this.userNotificationList.length === 1) {
          this.pageable.pageNumber -= this.pageable.pageNumber;
        }
        this.getDataPage(this.user, this.pageable);
        this.openSnackBar('Thành công', 'Xóa thông báo');
      }, error => {

      }
    );
  }

  reportThisRoom(room: Room): void {
    this.router.navigate(['/user/report'], {state: {data: room}});
  }


  public getPaginatorData(event: PageEvent): void {
    console.log(event);
    this.pageable.pageSize = event.pageSize;
    this.pageable.pageNumber = event.pageIndex;
    this.getDataPage(this.user, this.pageable);

  }

  getDataPage(user: User, pageable: Pageable): void {
    this.notificationService.getAll(user, pageable).subscribe(
      res => {
        this.page = res;
        this.userNotificationList = res.content;
        this.dataSource = new MatTableDataSource<UserNotification>(this.userNotificationList);
        this.dataSource.sort = this.sort;
      }, error => {

      }
    );
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  sortData(sort: any): void {
    this.pageable.mySort = sort;
    this.getDataPage(this.user, this.pageable);
  }
}


@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.html',
  styleUrls: ['dialog.scss'],
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: UserNotification) {
  }
}
