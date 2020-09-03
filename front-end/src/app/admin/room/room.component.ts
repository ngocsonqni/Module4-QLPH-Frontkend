import {Component, OnInit} from '@angular/core';
import {RoomService} from '../../services/room.service';
import {Room} from '../../models/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  listRoom: Room[] = [];

  constructor(private roomService: RoomService) {
  }

  ngOnInit(): void {
    this.roomService.findAll().subscribe(next => {
        this.listRoom = next;
      }, error => {
        console.log(error);
      }
    );
  }
}
