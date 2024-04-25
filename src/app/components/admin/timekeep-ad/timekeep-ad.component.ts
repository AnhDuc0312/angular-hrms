import { Component , OnInit } from '@angular/core';
import { TimeSheet } from '../../../models/timekeep';
import { TimeSheetService,} from '../../../services/timekeep.service';

@Component({
  selector: 'app-timekeep-ad',
  // standalone: true,
  // imports: [],
  templateUrl: './timekeep-ad.component.html',
  styleUrl: './timekeep-ad.component.scss'
})
export class TimekeepAdComponent implements OnInit{
  totalToday: number = 0;
  totalApproved: number = 0;
  totalPending: number = 0;
  searchQuery: string = '';
  records: TimeSheet[] = [];
  currentPage: number = 1;
  pageSize: number = 15;
  pages: number[] = [];
  filteredRecords : TimeSheet[] = [];

  constructor(private timeSheetService: TimeSheetService) { }

  ngOnInit(): void {
    // this.records = this.timekeepingService.generateTimekeepingRecords(); 
    this.filteredRecords = this.records; // Khởi tạo filteredRecords với toàn bộ records ban đầu
    this.calculateSummary();
    this.generatePageNumbers();
  }

  calculateSummary() {
    // Calculate summary statistics
    // Replace this with actual logic
    this.totalToday = 50;
    this.totalApproved = 30;
    this.totalPending = 20;
  }

  search() {
    // Implement search functionality
    // Replace this with actual search logic
    this.filteredRecords = this.records.filter(record =>
       record.user.username.includes(this.searchQuery)
    );
    this.calculateSummary();
    this.generatePageNumbers();
  }

  showDetail(record: TimeSheet) {
    // Implement detail view
    // Replace this with actual detail view logic
    console.log('Detail:', record);
  }

  changePage(page: number) {
    // Change current page
    this.currentPage = page;
    this.generatePageNumbers();
  }

  generatePageNumbers() {
    // Generate page numbers based on filtered data and page size
    // Replace this with actual pagination logic
    this.pages = Array.from({ length: Math.ceil(this.filteredRecords.length / this.pageSize) }, (_, i) => i + 1);
  }

}
