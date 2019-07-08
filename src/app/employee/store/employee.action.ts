import {Action} from '@ngrx/store';
import {Employee} from '../employee.model';

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

export class AddEmployee implements Action {
  readonly type: string = ADD_EMPLOYEE;
  constructor(public payload: Employee) {}
}

export class UpdateEmployee implements Action {
  readonly type: string = UPDATE_EMPLOYEE;
  constructor(public payload: {index: number, employee: Employee}) {}
}

export class DeleteEmployee implements Action {
  readonly type: string = DELETE_EMPLOYEE;
  constructor(public payload: number) {}
}

export type EmployeeAction = AddEmployee | UpdateEmployee | DeleteEmployee;
