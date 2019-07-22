import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Employee} from '../../employee.model';
import {AddEmployee, DeleteEmployee, StopEditing, UpdateEmployee} from '../../store/employee.action';
import {Subscription} from 'rxjs';
import {EmployeeService} from '../../employee.service';
import * as fromEmployee from '../../../store/app.reducer';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit, OnDestroy {
  employeeForm: FormGroup;

  subscription: Subscription;
  editMode = false;
  editedEmployee: Employee;

  constructor(private fb: FormBuilder, private store: Store<fromEmployee.AppState>, private empSer: EmployeeService) { }

  ngOnInit() {
    this.addEmployeeForm();

    this.subscription = this.store.select('employee').subscribe(stateData => {
      if (stateData.editedEmployeeIndex > -1) {
        this.editMode = true;
        this.editedEmployee = stateData.editedEmployee;

        this.employeeForm.setValue({
          id: this.editedEmployee.id,
          name: this.editedEmployee.name
        });

      } else {
        this.editMode = false;
      }
    });

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
      this.store.dispatch(new UpdateEmployee(newEmployee));
    } else {
      this.store.dispatch(new AddEmployee(newEmployee));
    }
    this.editMode = false;

    this.employeeForm.reset();
  }

  onClear() {
    this.employeeForm.reset();
    this.editMode = false;
    this.store.dispatch(new StopEditing());
  }

  onDelete() {
    this.store.dispatch(new DeleteEmployee());
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.store.dispatch(new StopEditing());
  }
}
