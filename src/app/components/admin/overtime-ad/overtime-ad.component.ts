import { Component , OnInit} from '@angular/core';
import { Overtime } from '../../../models/overtime';
import { OvertimeService } from '../../../services/overtime.service';

@Component({
  selector: 'app-overtime-ad',
  // standalone: true,
  // imports: [],
  templateUrl: './overtime-ad.component.html',
  styleUrl: './overtime-ad.component.scss'
})
export class OvertimeAdComponent implements OnInit{
  totalToday: number = 0;
  totalApproved: number = 0;
  totalPending: number = 0;
  searchQuery: string = '';
  records: Overtime[] = [];
  filteredRecords: Overtime[] = [];
  currentPage: number = 1;
  pageSize: number = 15;
  pages: number[] = [];

  constructor(private overtimeService: OvertimeService) {}

  ngOnInit(): void {
    // this.records = this.overtimeService.generateOvertimeRecords();
    this.filteredRecords = this.records;
    this.calculateSummary();
    this.generatePageNumbers();
  }

  calculateSummary() {
    this.totalToday = this.records.filter(record => record.date === this.getCurrentDate()).length;
    this.totalApproved = this.records.filter(record => record.status === 'Approved').length;
    this.totalPending = this.records.filter(record => record.status === 'Pending').length;
  }

  search() {
    this.filteredRecords = this.records.filter(
      record =>
        record.user.username.includes(this.searchQuery) ||
        record.user.fullName.includes(this.searchQuery)
    );
    this.calculateSummary();
    this.generatePageNumbers();
  }

  showDetail(record: Overtime) {
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
