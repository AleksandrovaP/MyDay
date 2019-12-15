export class User {
  id: string;
  role: string = '';
  username: string = '';
  password: string = '';
  name: string = '';
}

export enum UserRole {
  EMPLOYEE = 'employee',
  MANAGER = 'manager'
}
