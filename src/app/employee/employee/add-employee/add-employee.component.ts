import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Employee} from '../../employee.model';
import {AddEmployee} from '../../store/employee.action';
import {Subscription} from 'rxjs';
import {EmployeeService} from '../../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  subscription: Subscription;
  editMode = false;
  editedEmployeeIndex: number;
  editedEmployee: Employee;

  constructor(private fb: FormBuilder, private store: Store<{employee: {employees: Employee[]}}>, private empSer: EmployeeService) { }

  ngOnInit() {
    this.addEmployeeForm();

    this.subscription = this.empSer.startedEditing.subscribe(
      (index: number) => {
        this.editedEmployeeIndex = index;
        this.editMode = true;
        this.editedEmployee = this.empSer.findEmployee(index);
        this.employeeForm.setValue({
          id: this.editedEmployee.id,
          name: this.editedEmployee.name
        });
      }
    );
  }

  private addEmployeeForm() {
    this.employeeForm = this.fb.group({
      id: [],
      name: ['']
    });
  }

  onSubmit() {
    const id = this.employeeForm.value.id;
    const name = this.employeeForm.value.name;
    const newEmployee = new Employee(id, name);

    if (this.editMode) {
      this.empSer.updateEmployee(this.editedEmployeeIndex, newEmployee);
    } else {
      this.store.dispatch(new AddEmployee(newEmployee));
    }
    this.editMode = false;

    this.employeeForm.reset();
  }
}
