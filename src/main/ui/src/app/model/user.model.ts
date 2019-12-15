export class User {
  id: string;
  role: string = '';
  username: string = '';
  password: string = '';
  fullName: string = '';
}

export enum UserRole {
  EMPLOYEE = 'employee',
  MANAGER = 'manager'
}
