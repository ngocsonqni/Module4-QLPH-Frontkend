import {TypeRoom} from './type-room';
import {Region} from './region';
import {Status} from './status';

export class Room {
  id: number;
  name: string;
  area: number;
  floor: number;
  capacity: number;
  deleteFlag: boolean;
  typeroom: TypeRoom;
  region: Region;
  status: Status;
}
