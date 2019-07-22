import * as fromEmployee from '../employee/store/employee.reducer';
import {ActionReducerMap} from '@ngrx/store';


export interface AppState {
  employee: fromEmployee.State;
}

export const AppReducer: ActionReducerMap<AppState> = {
  employee: fromEmployee.employeeReducer
}


