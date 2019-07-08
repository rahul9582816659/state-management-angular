import {Action} from '@ngrx/store';
import {Employee} from '../employee.model';

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

export class AddEmployee implements Action {

  readonly type: string = ADD_EMPLOYEE;

  payload: Employee;

}
