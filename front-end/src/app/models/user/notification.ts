
import {User} from './user';
import {Room} from '../room';

export class Notifications {
id: number;
content: string;
requestDate: Date;
repondDate: Date;
room: Room;
user: User;
status: string;
typeOfNotification: TypeOfNotification;

}
export class TypeOfNotification {
   id: number;
   name: string;

   constructor(id: number, name: string) {
     this.id = id;
     this.name = name;
   }
 }

