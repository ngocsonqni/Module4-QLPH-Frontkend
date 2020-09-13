import {Role} from './role';

export class Member {
  userId: number;
  username: string;
  fullName: string;
  password: string;
  position: string;
  deleteFlag: boolean;
  role: Role;
}
