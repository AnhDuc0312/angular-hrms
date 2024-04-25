import { Component, OnInit } from '@angular/core';

enum WorkType {
  Offline = 'Offline',
  Remote = 'Remote',
  Leave = 'Leave',
  Overtime = 'Overtime',
}

  
interface AttendanceRecord {
  employeeId: number;
  employeeName: string;
  date: Date;
  checkOutTime: string;
  checkInTime: string;
  workStatus: string;
  status: string;
}


@Component({
  selector: 'app-timekeep',
  // standalone: true,
  // imports: [],
  templateUrl: './timekeep.component.html',
  styleUrl: './timekeep.component.scss',
})
export class TimekeepComponent implements OnInit {
  attendanceRecords: AttendanceRecord[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 100;
  searchDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    // Khởi tạo dữ liệu mẫu (điều chỉnh theo nhu cầu của bạn)
    this.generateFakeData();
  }

  

  generateFakeData(): void {
    // Mô phỏng dữ liệu chấm công
    for (let i = 0; i < this.totalItems; i++) {
      const record: AttendanceRecord = {
        employeeId: Math.floor(Math.random() * 1000) + 1,
        employeeName: `Employee ${i + 1}`,
        date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1),
        checkOutTime: `${Math.floor(Math.random() * 24)}:00`,
        checkInTime: `${Math.floor(Math.random() * 24)}:00`,
        workStatus: Math.random() < 0.5 ? 'Đủ Công' : 'Thiếu Công',
        status: Math.random() < 0.5 ? 'Đúng Giờ' : 'Trễ Giờ'
      };
      this.attendanceRecords.push(record);
    }
  }

  filterByDate(): void {
    // Lọc dữ liệu theo ngày tìm kiếm
  if (this.searchDate) {
    this.attendanceRecords = this.attendanceRecords.filter(record => record.date.toDateString() === this.searchDate.toDateString());
  } else {
    // Nếu không có ngày tìm kiếm, khôi phục dữ liệu ban đầu
    this.attendanceRecords = [];
    this.generateFakeData();
  }
  }

  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
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
}
