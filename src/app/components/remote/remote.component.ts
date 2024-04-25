import { Component } from '@angular/core';

@Component({
  selector: 'app-remote',
  // standalone: true,
  // imports: [],
  templateUrl: './remote.component.html',
  styleUrl: './remote.component.scss'
})
export class RemoteComponent {
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
