import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {EmployeeService} from '../employee.service';
import * as fromEmployee from '../store/employee.reducer';
import {StartEditing} from '../store/employee.action';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Observable<{employees: Employee[]}>;

  constructor(private store: Store<fromEmployee.AppState>, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this.store.select('employee');
  }


  selectEmployee(index: number) {
    this.store.dispatch(new StartEditing(index));
  }
}
