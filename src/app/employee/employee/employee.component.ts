import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee.model';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  employees: Employee[] = [new Employee(1, 'Rahul'), new Employee(2, 'Shalu')];

}
