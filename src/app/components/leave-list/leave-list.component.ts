// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Leave {
  date: string;
  reason: string;
  leaveType: string;
}

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrl: './leave-list.component.scss'
})
export class LeaveListComponent {
  leaves: Leave[] = [
    { date: '2024-04-01', reason: 'Personal', leaveType: 'Paid' },
    { date: '2024-04-05', reason: 'Family', leaveType: 'Unpaid' },
    { date: '2024-04-10', reason: 'Sick', leaveType: 'Paid' },
    // Add more leave data as needed
  ];

  currentPage = 1;
  itemsPerPage = 10; // Change as needed

  ngOnInit(): void {
    // Initialize component
    this.filterLeaves();
  }

  constructor(
    private router : Router
  ){}

  filterLeaves(): void {
    // Implement any filtering logic if needed
  }

  getTotalPages(): number {
    return Math.ceil(this.leaves.length / this.itemsPerPage);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
    }
  }

  navigateToOtherPage(){
    // Sử dụng navigateByUrl để chuyển hướng đến đường dẫn mong muốn
    this.router.navigateByUrl('/leave_form');
  }
}
