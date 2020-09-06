import {Notifications} from './notification';
import {User} from './user';

export class UserNotification {
id: number;
deleteFlag: boolean;
seen: boolean;
user: User;
notification: Notifications;
}
