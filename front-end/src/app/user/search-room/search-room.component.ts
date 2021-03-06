import {Component, Inject, OnInit} from '@angular/core';
import {SearchRoomService} from '../../services/search-room.service';
import {Region} from '../../models/region';
import * as $ from 'jquery';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Room} from '../../models/room';
import {TypeRoom} from '../../models/type-room';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-search-room',
  templateUrl: './search-room.component.html',
  styleUrls: ['./search-room.component.scss']
})
export class SearchRoomComponent implements OnInit {
  regionList: Region[];
  typeMeetingList: TypeRoom[];
  searchRoomForm: FormGroup;
  assetMap = new Map([['projector', false], ['audio', false], ['paper', false], ['pen', false],
    ['laptop', false], ['table', false], ['chair', false], ['board', false]]);
  starttime = new Date();
  endtime = new Date();
  beginDate: string;
  endDate: string;
  idRoom: string;
  assetRoom: string;
  resultSearchRoom: Room[];

  constructor(private searchroomService: SearchRoomService,
              private route: Router,
              private formBuilder: FormBuilder,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.searchroomService.getRegion().subscribe(next => {
      this.regionList = next;
    }, error => {
      console.log(error);
    });
    this.searchroomService.getTypeMeeting().subscribe(next => {
      this.typeMeetingList = next;
    }, error => {
      console.log(error);
    });
    this.searchRoomForm = this.formBuilder.group({
      typeMeeting: [''],
      region: [''],
      startTime: [''],
      endTime: [''],
      numberOfUses: ['']
    });
  }

  checkChose(value): void {
    this.assetMap.set(value.source.id, value.checked);
  }

  search(): void {
    this.beginDate = '';
    this.endDate = '';
    this.idRoom = '';
    this.assetRoom = '';
    this.assetRoom = '';
    this.starttime = this.searchRoomForm.value.startTime;
    this.endtime = this.searchRoomForm.value.endTime;
    this.beginDate = this.starttime.getFullYear() + '-' + (this.starttime.getMonth() + 1) + '-' + this.starttime.getDate()
      + ' ' + this.starttime.getHours() + ':' + this.starttime.getMinutes() + ':' + this.starttime.getSeconds();
    this.endDate = this.endtime.getFullYear() + '-' + (this.endtime.getMonth() + 1) + '-' + this.endtime.getDate()
      + ' ' + this.endtime.getHours() + ':' + this.endtime.getMinutes() + ':' + this.endtime.getSeconds();
    for (const entry of this.assetMap.entries()) {
      if (entry[1]) {
        this.assetRoom += entry[0] + ',';
      }
    }
    this.searchroomService.getRoom(this.searchRoomForm.value.typeMeeting, this.searchRoomForm.value.region,
      this.beginDate, this.endDate, this.searchRoomForm.value.numberOfUses,
      this.assetRoom).subscribe(next => {
      this.resultSearchRoom = next;
      if (next != null) {
        this.resuilt();
      }
    }, error => {
      console.log(error);
    });
  }

  resuilt(): void {
    this.dialog.open(DialogResultTableComponent, {
      width: '1500px',
      height: '500px',
      data: {
        data: this.resultSearchRoom,
        begin: this.beginDate,
        end: this.endDate,
        asset: this.assetRoom
      }
    });
  }
}

@Component({
  selector: 'app-result',
  templateUrl: './result.html',
})
export class DialogResultTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'floor', 'capacity', 'area', 'asset', 'resgister'];
  dataSource = this.data.data;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private route: Router,
              public dialogRef: MatDialogRef<DialogResultTableComponent>,
              private httpClient: HttpClient) {

  }

  ngOnInit(): void {

  }

  test(idRoom: number): void {
    this.dialogRef.close();
    this.route.navigate(['user/test'], {
      state: {
        id: idRoom,
        begin: this.data.begin,
        end: this.data.end,
        asset: this.data.asset
      }
    });
  }
}
