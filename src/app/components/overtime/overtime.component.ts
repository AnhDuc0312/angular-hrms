import { Component } from '@angular/core';

@Component({
  selector: 'app-overtime',
  // standalone: true,
  // imports: [],
  templateUrl: './overtime.component.html',
  styleUrl: './overtime.component.scss'
})
export class OvertimeComponent {
  plan: string = 'da-thong-qua';
  reason: string = '';
  date: string = '';
  startTime: string = '';
  endTime: string = '';
  task: string = '';

  submitForm() {
    console.log('Submitted:', this.plan, this.reason, this.date, this.endTime,this.startTime, this.task);
    // Code to handle form submission goes here
  }

  cancel() {
    // Code to handle form cancellation goes here
  }

}
