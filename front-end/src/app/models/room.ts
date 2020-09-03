import {TypeRoom} from './type-room';
import {Region} from './region';
import {Status} from './status';

export class Room {
  id: number;
  roomName: string;
  roomArea: number;
  roomFloor: number;
  roomCapacity: number;
  delete_flag: boolean;
  typeRoom: TypeRoom;
  region: Region;
  status: Status;
}
