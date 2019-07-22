import {Employee} from '../employee.model';
import {ADD_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE, EmployeeAction, START_EDITING, STOP_EDITING} from './employee.action';

export interface State {
  employees: Employee[];
  editedEmployee: Employee;
  editedEmployeeIndex: number;
}


const employeeState: State = {
  employees: [
    new Employee (1, 'Rahul'),
    new Employee (2, 'Shalu'),
  ],
  editedEmployee: null,
  editedEmployeeIndex: -1
}

export function employeeReducer(state: State = employeeState, action: EmployeeAction) {
    switch (action.type) {
      case ADD_EMPLOYEE:
        return {
          ...state,
          employees: [...state.employees, action.payload]
        };
      case UPDATE_EMPLOYEE:
        const employee = state.employees[state.editedEmployeeIndex];
        const updatedEmployee = {
          ...employee,
          ...action.payload
        };

        const updatedEmployees = [...state.employees];
        updatedEmployees[state.editedEmployeeIndex] = updatedEmployee;

        return {
          ...state,
          employees: updatedEmployees,
          editedEmployee: null,
          editedEmployeeIndex: -1
        };

      case DELETE_EMPLOYEE:
        return {
          ...state,
          employees: state.employees.filter((emp, empIndex) => {
            return empIndex !== state.editedEmployeeIndex;
          }),
          editedEmployee: null,
          editedEmployeeIndex: -1
        };
      case START_EDITING:
        return {
          ...state,
          editedEmployeeIndex: action.payload,
          editedEmployee: {...state.employees[action.payload]}
        };
      case STOP_EDITING:
        return {
          ...state,
          editedEmployeeIndex: -1,
          editedEmployee: null
        };
      default:
        return state;
    }
}
