import {Employee} from '../employee.model';
import {ADD_EMPLOYEE, UPDATE_EMPLOYEE , DELETE_EMPLOYEE, EmployeeAction} from './employee.action';

const employeeState = {
  employees: [
    new Employee (1, 'Rahul'),
    new Employee (2, 'Shalu'),
  ]
}

export function employeeReducer(state = employeeState, action: EmployeeAction) {
    switch (action.type) {
      case ADD_EMPLOYEE:
        return {
          ...state,
          employees: [...state.employees, action.payload]
        };
      case UPDATE_EMPLOYEE:
        const employee = state.employees[action.payload.index];

        const updatedEmployee = {
          ...employee,
          ...action.payload.employee
        };

        const updatedEmployees = [...state.employees];
        updatedEmployees[action.payload.index] = updatedEmployee;

        return {
          ...state,
          employees: updatedEmployees
        };

      case DELETE_EMPLOYEE:
        return {
          ...state,
          employees: [...state.employees, action.payload]
        };

      default:
        return state;
    }
}
