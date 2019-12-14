import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRouting } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AccountService } from './service/account.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AppComponent } from './app.component';
import { AuthenticationService } from './service/authentication.service';
import { EmployeeService } from './service/employee.service';
import { LoginComponent } from './login/login.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './guards/auth-guard';

@NgModule({
  declarations: [
    AddEmployeeComponent,
    AppComponent,
    ListEmployeesComponent,
    LoginComponent,
    ProfileComponent,
    RegistrationComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AccountService,
    AuthGuard,
    AuthenticationService,
    EmployeeService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
