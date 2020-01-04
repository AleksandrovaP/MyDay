import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html'
})
export class ChartsComponent implements OnChanges {
  @Input() public isOpen: boolean = false;
  @Input() public data: any[];

  @Output() public modalClosed: EventEmitter<any> = new EventEmitter();

  public chartsData: any[] = [];
  public datePipe = new DatePipe("en");

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      changes.data.currentValue.forEach(inputDataEntry => {
        if (this.isDateAdded(this.datePipe.transform(new Date(inputDataEntry.date), 'dd/MM/yyyy'))) {
          this.chartsData.forEach(entry => {
            if (entry.name === this.datePipe.transform(new Date(inputDataEntry.date), 'dd/MM/yyyy')) {
              entry.series.push({
                name: inputDataEntry.projectName,
                value: inputDataEntry.hours
              });
            }
          })
        } else {
          let dataEntry = {
            name: this.datePipe.transform(new Date(inputDataEntry.date), 'dd/MM/yyyy'),
            series: [{
              name: inputDataEntry.projectName,
              value: inputDataEntry.hours
            }]
          };
          this.chartsData.unshift(dataEntry);
        }
      });
    }
  }

  public onCancel(): void {
    this.isOpen = false;
  }

  private isDateAdded(date: string): boolean {
    return this.chartsData.some(entry => entry.name === date);
  }
}
