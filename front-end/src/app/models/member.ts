import {Role} from './role';

export class Member {
  id: number;
  username: string;
  fullName: string;
  password: string;
  position: string;
  role: Role;
}
