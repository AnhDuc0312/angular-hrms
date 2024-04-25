import { Component , OnInit } from '@angular/core';
import { RemoteListService } from '../../services/remote-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remote-list',
  // standalone: true,
  // imports: [],
  templateUrl: './remote-list.component.html',
  styleUrl: './remote-list.component.scss'
})
export class RemoteListComponent implements OnInit{
  registrations: any[] = [];
  filteredRegistrations: any[] = [];
  startDate?: String;
  endDate?: String;
  totalWorkHours: number = 0;
  currentPage: number = 1;
  pageSize: number = 15;

  // constructor(private remoteListService: RemoteListService) { }

  ngOnInit(): void {
    this.registrations = this.getRegistrations();
    this.filteredRegistrations = this.paginate(this.registrations, this.currentPage, this.pageSize);
    this.calculateTotalWorkHours();
  }

  constructor(
    private router : Router
  ){}

  // getRegistrations(): void {
  //   this.remoteListService.getRegistrations()
  //     .subscribe((registrations : any[]) => {
  //       this.registrations = registrations;
  //       this.filteredRegistrations = registrations;
  //       this.calculateTotalWorkHours();
  //     });
  // }
  getRegistrations(): any[] {
    const registrations = [];
    const startDate = new Date('2024-04-01');
    for (let i = 0; i < 50; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const registration = {
        date: this.formatDate(date),
        startTime: this.randomTime(),
        endTime: this.randomTime(),
        task: 'Task ' + (i + 1)
      };
      registrations.push(registration);
    }
    return registrations;
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  private randomTime(): string {
    const hour = Math.floor(Math.random() * 24);
    const minute = Math.floor(Math.random() * 60);
    return `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;
  }


  filterByDateRange(): void {
    if (this.startDate !== undefined && this.endDate !== undefined) {
      this.filteredRegistrations = this.registrations.filter(registration => {
        return registration.date >= this.startDate! && registration.date <= this.endDate!;
      });
      this.calculateTotalWorkHours();
    }
  }
  

  calculateWorkHours(startTime: string, endTime: string): number {
    // Viết mã để tính thời gian làm giữa startTime và endTime
    // Giả sử đã có một hàm đã được triển khai để thực hiện điều này
    return 0;
  }

  calculateTotalWorkHours(): void {
    this.totalWorkHours = this.filteredRegistrations.reduce((total, registration) => {
      return total + this.calculateWorkHours(registration.startTime, registration.endTime);
    }, 0);
  }

  navigateToOtherPage(){
    // Sử dụng navigateByUrl để chuyển hướng đến đường dẫn mong muốn
    this.router.navigateByUrl('/remote_form');
  }
  getTotalPages(): number {
    // Calculate total pages
    return Math.ceil(this.registrations.length / this.pageSize);
  }

  paginate(data: any[], currentPage: number, pageSize: number): any[] {
    // Calculate start and end index
  const startIndex = (currentPage - 1) * pageSize;
  let endIndex = startIndex + pageSize;

  // Ensure endIndex does not exceed the length of the data array
  endIndex = Math.min(endIndex, data.length);

  // Return the paginated portion of the data array
  return data.slice(startIndex, endIndex);
  }

  previousPage(): void {
    // Navigate to previous page
    if (this.currentPage > 1) {
      this.currentPage--;
      this.filteredRegistrations = this.paginate(this.registrations, this.currentPage, this.pageSize);
    }
  }

  nextPage(): void {
    // Navigate to next page
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
      this.filteredRegistrations = this.paginate(this.registrations, this.currentPage, this.pageSize);
    }
  }
}
