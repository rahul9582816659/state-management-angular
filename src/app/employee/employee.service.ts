import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Employee} from './employee.model';
import {Store} from '@ngrx/store';
import {AddEmployee} from './store/employee.action';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [
                            new Employee (1, 'Rahul'),
                            new Employee (2, 'Shalu'),
                          ];

  employeesChanged = new Subject<Employee[]>();

  startedEditing = new Subject<number>();

  constructor(private store: Store<{employee: {employees: Employee[]}}>) { }

  findEmployee(index: number) {
    return this.employees[index];
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.employeesChanged.next(this.employees.slice());
    this.store.dispatch(new AddEmployee(employee));
  }
  
  updateEmployee(index: number, newEmployee: Employee) {
    this.employees[index] = newEmployee;
    this.employeesChanged.next(this.employees.slice());
  }

  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
    this.employeesChanged.next(this.employees.slice());
  }
}
