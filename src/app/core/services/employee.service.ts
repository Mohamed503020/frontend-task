import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

constructor(private HttpClient:HttpClient) { 

}
getAllEmployee(page:any,parPage:any):Observable<{data: Employee[]; total: number}>{
  const url = `https://reqres.in/api/users?page=${page}&per_page=${parPage}`;
  return this.HttpClient.get<{data: Employee[]; total: number}>(url)
}
}
