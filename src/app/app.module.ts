import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeeComponent} from './employee/employee/employee.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './app-material.module';
import {AddEmployeeComponent} from './employee/employee/add-employee/add-employee.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppReducer} from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(AppReducer),
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
