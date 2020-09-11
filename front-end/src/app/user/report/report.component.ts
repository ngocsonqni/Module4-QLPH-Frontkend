import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';

import {RoomService} from '../../services/users/room.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Notifications, TypeOfNotification} from '../../models/user/notification';

import {User} from '../../models/user/user';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {from, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Room} from '../../models/room';
import {NotificationService} from '../../services/notification/notification.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

declare var $: any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  user: User;
  rooms: Room[];
  reportForm: FormGroup;
  date: any;
  reportData: Notifications;
  room: Room;
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  @ViewChild(MatAutocompleteTrigger) autocomplete: MatAutocompleteTrigger;
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  reasonReport = new FormControl();
  filteredReasons: Observable<string[]>;
  reasonList: string[] = [];
  allReasons: string[] = ['Bàn', 'Ghế', 'Máy chiếu', 'Máy lạnh', 'Đèn', 'Điện'];
  searckRoom: string;

  constructor(private roomService: RoomService, private fb: FormBuilder, private notificationService: NotificationService,
              private router: Router,
              private snackBar: MatSnackBar, private dialog: MatDialog) {
    this.reportForm = this.fb.group({
      room: ['', Validators.required],
      content: ['', Validators.required],
      requestDate: [''],
      status: ['chờ xử lý']
    });

    this.filteredReasons = this.reasonReport.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allReasons.slice()));
  }

  ngOnInit(): void {
    this.user = new User(1, 'Ngoc Thach');
    this.roomService.getAllRoom().subscribe(
      res => {
        this.rooms = res;
        if (history.state.data !== undefined) {
          this.room = this.rooms[this.findIndexOfRoomInList(history.state.data)];
        }

      },
      error => {
      }
    );
  }

  submitNotification(): void {
    const type = new TypeOfNotification(1, 'Báo cáo');
    if (this.reportForm.valid) {
      this.reportData = this.reportForm.value;
      this.reportData.requestDate = new Date();
      this.reportData.typeOfNotification = type;
      const dialogRef = this.dialog.open(ConfirmReportComponent, {
        width: '500px',
        data: {formData: this.reportData, id: this.user.id}
      });
      dialogRef.afterClosed().subscribe(resuilt => {
        if (resuilt !== 0) {
          this.notificationService.saveNotification(resuilt.formData, resuilt.id).subscribe(
            res => {
              console.log('save Success');
              this.openSnackBar('Thành công', 'Tạo báo cáo');
              this.router.navigate(['/user/notification']);
            },
            error => {
            }
          );
        }

      });
    }

  }

  findIndexOfRoomInList(room: any): number {
    for (let i = 0; i <= this.rooms.length; i++) {
      if (this.rooms[i].id === room.id) {
        return i;
      }
    }
    return 0;
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.reasonList.push(value.trim());
      this.setValueForContentReport(value);
    }
    if (input) {
      input.value = '';
    }
    this.reasonReport.setValue(null);
    this.autocomplete.closePanel();
    $('#content').focus();
  }

  remove(reason: string): void {
    const index = this.reasonList.indexOf(reason);
    this.removeReasonInContentReport(this.reasonList.indexOf(reason) + 1, reason, this.reasonList.length);
    if (index >= 0) {
      this.reasonList.splice(index, 1);
    }
    this.allReasons.push(reason);
    this.filteredReasons = this.reasonReport.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allReasons.slice()));
    $('#content').focus();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.reasonList.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.reasonReport.setValue(null);
    this.allReasons.splice(this.allReasons.indexOf(event.option.value), 1);
    this.filteredReasons = this.reasonReport.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allReasons.slice()));

    this.setValueForContentReport(event.option.value);
    $('#content').focus();
  }

  private setValueForContentReport(event: string): void {
    let contentReport: string = this.reportForm.get('content').value.trim();
    const itemContent = this.reasonList.length + '. ' + event + '  Tình trạng :  ';
    if (contentReport !== '') {
      contentReport = contentReport + '\n' + itemContent;
    } else {
      contentReport = itemContent;
    }

    this.reportForm.get('content').setValue(contentReport);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allReasons.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  removeReasonInContentReport(index: number, item: string, length: number): void {
    let contentReport: string = this.reportForm.get('content').value;
    const positionResson = contentReport.indexOf(index + '. ' + item);
    const nextPositionReason = contentReport.indexOf((index + 1) + '. ');
    let tempIndex;
    if (index === length) {
      contentReport = contentReport.replace(contentReport.substring(positionResson), '').trim();
      this.reportForm.get('content').setValue(contentReport);
    } else {
      contentReport = contentReport.replace(contentReport.slice(positionResson, nextPositionReason), '').trim();
      for (let i = index + 1; i <= length; i++) {
        tempIndex = (i) + '. ';
        contentReport = contentReport.replace(tempIndex, (i - 1) + '. ');
      }
      this.reportForm.get('content').setValue(contentReport);
    }
  }


  fitlerRoom($event: string): Room[] {
    console.log(event);

    return [];
  }
}

@Component({
  selector: 'app-confirm',
  templateUrl: 'confirm.html',
  styleUrls: ['confirm.scss'],
})
export class ConfirmReportComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: number, public dialogRef: MatDialogRef<ConfirmReportComponent>) {
  }
}
