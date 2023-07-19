import { Employee } from 'src/app/core/models/employee';
import { EmployeeService } from './../../../../core/services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
isLoading=true;
employees: Employee[] = [];
currentPage = 1;
perPage = 6;
totalItems = 0;
totalPages = 0;
pages: number[] = [];
  constructor(private EmployeeService:EmployeeService) { }

  ngOnInit() {

    this.fetchEmployees()
  }
  fetchEmployees() {
this.EmployeeService.getAllEmployee(this.currentPage,this.perPage).subscribe({
  next:(res)=>{
    this.employees = res.data;
    this.totalItems = res.total;
    this.totalPages = Math.ceil(this.totalItems / this.perPage);
    this.pages = Array(this.totalPages).fill(0).map((x, i) => i + 1);
  },
  error:error=>console.log(error.message)
})
   
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchEmployees();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchEmployees();
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.fetchEmployees();
    }
  }
}
