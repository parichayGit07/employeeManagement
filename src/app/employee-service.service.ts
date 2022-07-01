import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Employee from './Entity/Employee';

const BASE_URL = 'http://localhost:8090/';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  getUsers() {
    return this.http.get(BASE_URL+"getAllEmployees");
  }

  createUser(employee: Employee) {
    return this.http.post(BASE_URL+"create", employee);
  }
  constructor(public http: HttpClient) { }
}
