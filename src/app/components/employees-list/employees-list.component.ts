import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/employee-service.service';
import Employee from 'src/app/Entity/Employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees :Employee[] = [];

  constructor(public employeeService :EmployeeServiceService) { }

  ngOnInit(): void {
    const promise = this.employeeService.getUsers();
    promise.subscribe((response) => {
      console.log(response);
      this.employees = response as Employee[];
    });
  }

}
