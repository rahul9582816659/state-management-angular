import {Employee} from '../employee.model';
import {ADD_EMPLOYEE, AddEmployee} from './employee.action';

const employeeState = {
  employees: [
    new Employee (1, 'Rahul'),
    new Employee (1, 'Shalu'),
  ]
}

export function employeeReducer(state = employeeState, action: AddEmployee) {
    switch (action.type) {
      case  ADD_EMPLOYEE:
        return {
          ...state,
          employees: [...state.employees, action.payload]
        };
    }
}
