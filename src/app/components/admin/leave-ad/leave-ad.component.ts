import { Component , OnInit} from '@angular/core';
import { Leave } from '../../../models/leave';
import { LeaveService } from '../../../services/leave.service';

@Component({
  selector: 'app-leave-ad',
  // standalone: true,
  // imports: [],
  templateUrl: './leave-ad.component.html',
  styleUrl: './leave-ad.component.scss'
})
export class LeaveAdComponent implements OnInit{
  totalToday: number = 0;
  totalApproved: number = 0;
  totalPending: number = 0;
  searchQuery: string = '';
  records: Leave[] = [];
  filteredRecords: Leave[] = [];
  currentPage: number = 1;
  pageSize: number = 15;
  pages: number[] = [];
  leaves : Leave[] = [];

  constructor(private leaveService: LeaveService) {}

  ngOnInit(): void {
    // this.records = this.leaveService.generateLeaveRecords();
    this.filteredRecords = this.records;
    this.calculateSummary();
    this.generatePageNumbers();
    this.getAlls();
  }

  getAlls() {
    debugger
    this.leaveService.getAll().subscribe({
      next: (response: any) => {
        debugger
        this.leaves = response;
        // this.totalPages = response.totalPages;
        // this.visiblePages = this.generateVisiblePageArray(this.currentPage, this.totalPages);
      },
      complete: () => {
        debugger;
      },
      error: (error: any) => {
        debugger;
        console.error('Error fetching products:', error);
      }
    });    
  }

  calculateSummary() {
    this.totalToday = this.records.filter(record => record.date === this.getCurrentDate()).length;
    this.totalApproved = this.records.filter(record => record.status === 'Approved').length;
    this.totalPending = this.records.filter(record => record.status === 'Pending').length;
  }

  search() {
    this.filteredRecords = this.records.filter(
      record =>
        record.user.fullName.includes(this.searchQuery) ||
        record.user.department.name.includes(this.searchQuery)
    );
    this.calculateSummary();
    this.generatePageNumbers();
  }

  showDetail(record: Leave) {
    console.log('Detail:', record);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.generatePageNumbers();
  }

  generatePageNumbers() {
    this.pages = Array.from(
      { length: Math.ceil(this.filteredRecords.length / this.pageSize) },
      (_, i) => i + 1
    );
  }

  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
    const day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
    return `${year}-${month}-${day}`;
  }

}
