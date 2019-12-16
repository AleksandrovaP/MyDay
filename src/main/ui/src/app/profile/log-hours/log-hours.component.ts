import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { WorkingHours } from '../../model/working-hours.model';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-log-hours',
  templateUrl: './log-hours.component.html',
  styleUrls: ['./log-hours.component.scss']
})
export class LogHoursComponent {

  @Input() public isOpen: boolean = false;

  public addHoursForm: FormGroup;
  public addButtonState: ClrLoadingState = ClrLoadingState.DEFAULT;

  private workingHours: WorkingHours;

  constructor(private formBuilder: FormBuilder,
              private employeeService: EmployeeService) {

    this.addHoursForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      logh: ['', Validators.required],
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

    this.employeeService.logHours(this.workingHours).subscribe((response) => {
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
      logh: '',
      date: ''
    });
  }

}
