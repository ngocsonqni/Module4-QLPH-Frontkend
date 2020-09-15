import {Component, OnInit} from '@angular/core';
import {RoomService} from '../../services/room.service';
import {Room} from '../../models/room';
import {PageEvent} from '@angular/material/paginator';
import {Page} from '../../models/pagination/page';
import {ToastrService} from 'ngx-toastr';
import {TypeRoom} from '../../models/type-room';
import {Region} from '../../models/region';
import {Status} from '../../models/status';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  listRoom: Room[] = [];
  page: Page<Room>;
  displayedColumns: string[] = ['position', 'name', 'floor', 'region', 'status', 'typeRoom', 'capacity', 'detail', 'edit', 'delete'];
  pageEvent = new PageEvent();
  name: string = '';
  floor: string = '';
  region: string = '';
  status: string = '';
  typeRoom: string = '';
  capacity: string = '';
  typeRoomList: TypeRoom[];
  regionList: Region[];
  statusList: Status[];

  constructor(private roomService: RoomService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.pageEvent.pageIndex = 0;
    this.pageEvent.pageSize = 5;
    this.getServerData(this.pageEvent);
    this.roomService.findAllRegion().subscribe(next => {
      this.regionList = next;
    });
    this.roomService.findAllStatus().subscribe(next => {
      this.statusList = next;
    });
    this.roomService.findAllTypeRoom().subscribe(next => {
      this.typeRoomList = next;
    });
  }

  public getServerData(event?: PageEvent) {
    this.roomService.search(event, this.name, this.floor, this.capacity, this.typeRoom, this.region, this.status).subscribe(
      response => {
        this.page = response;
        this.listRoom = response.content;
      },
      error => {
        console.log(error);
      }
    );
  }

  public search() {
    this.roomService.search(this.pageEvent, this.name, this.floor, this.capacity, this.typeRoom, this.region, this.status).subscribe(response => {
        if (response == null) {
          this.toast.error('', 'Không tìm thấy dữ liệu', {
            timeOut: 3000
          });
        } else {
          this.page = response;
          this.listRoom = response.content;
        }
      },
      error => {
        console.log(error);
      });
  }
}
