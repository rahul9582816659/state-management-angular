import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Observable<{employees: Employee[]}>;

  constructor(private store: Store<{employee: {employees: Employee[]}}>, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this.store.select('employee');
  }


  selectEmployee(index: number) {
    this.employeeService.startedEditing.next(index);
  }
}
