import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { WorkingHours } from '../../model/working-hours.model';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-log-hours',
  templateUrl: './log-hours.component.html',
  styleUrls: ['./log-hours.component.scss']
})
export class LogHoursComponent {

  @Input() public isOpen: boolean = false;
  @Input() public employee: Employee;

  @Output() public modalClosed: EventEmitter<any> = new EventEmitter();

  public addHoursForm: FormGroup;
  public addButtonState: ClrLoadingState = ClrLoadingState.DEFAULT;

  private workingHours: WorkingHours;

  constructor(private formBuilder: FormBuilder,
              private employeeService: EmployeeService) {

    this.addHoursForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      hours: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  public onCancel(): void {
    this.isOpen = false;
    this.clearForm();
  }

  public onAdd(): void {
    this.addButtonState = ClrLoadingState.LOADING;

    let formValues = this.addHoursForm.value;
    this.workingHours = { ...formValues };

    let date = new Date(this.workingHours.date);
    let timestamp = date.getTime();
    this.workingHours.date = timestamp;
    this.workingHours.employeeId = this.employee.id;

    this.employeeService.logHours(this.workingHours).subscribe((response) => {
      this.modalClosed.emit(this.workingHours);
      this.addButtonState = ClrLoadingState.SUCCESS;
      this.isOpen = false;
      this.clearForm();
    }, (error: Error) => {
      this.addButtonState = ClrLoadingState.ERROR;
      console.error(error);
    });

  }

  private clearForm() {
    this.addHoursForm.patchValue({
      projectName: '',
      hours: '',
      date: ''
    });
  }

}
