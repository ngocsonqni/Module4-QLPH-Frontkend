import {Component, OnInit, ViewChild} from '@angular/core';
import {SearchRoomService} from '../../services/search-room.service';
import {Region} from '../../models/region';
import {TypeMeeting} from '../../models/type-meeting';
import * as $ from 'jquery';

@Component({
  selector: 'app-search-room',
  templateUrl: './search-room.component.html',
  styleUrls: ['./search-room.component.scss']
})
export class SearchRoomComponent implements OnInit {
  regionList: Region[];
  typeMeetingList: TypeMeeting[];
  resultChooseTypeMeeting = 0;
  resultChooseNumberOfMeeting = [];

  constructor(private searchroomService: SearchRoomService) {
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
  }

  ChooseTypeMeeting(value): void {
    this.resultChooseTypeMeeting = value;
  }

  ChooseNumberOfMeeting(value: any): void {
    this.resultChooseNumberOfMeeting = [];
    for (let i = 0; i < value.value; i++) {
      this.resultChooseNumberOfMeeting[i] = 'start' + i + ',' + 'stop' + i;
    }
  }
}
