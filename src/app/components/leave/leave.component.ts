import { Component } from '@angular/core';

@Component({
  selector: 'app-leave',
  // standalone: true,
  // imports: [],
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.scss'
})
export class LeaveComponent {
  plan: string;
  date: Date;
  startTime: string;
  endTime: string;
  reason: string;
  task: string;

  constructor() {
    this.plan = '';
    this.date = new Date();
    this.startTime = '';
    this.endTime = '';
    this.reason = '';
    this.task = '';
  }

  submitForm() {
    // Logic to submit form data
  }

  cancel() {
    // Logic to cancel form submission
  }

}
