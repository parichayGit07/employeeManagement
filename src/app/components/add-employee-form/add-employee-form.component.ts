import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/employee-service.service';
import Employee from 'src/app/Entity/Employee';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})
export class AddEmployeeFormComponent implements OnInit {
  employee :Employee = new Employee();

  constructor(public employeeService :EmployeeServiceService, private router :Router) { }

  ngOnInit(): void {
  }

  save() {
    // console.log(this.user.name);
    // console.log(this.user.age);
    const observable = this.employeeService.createUser(this.employee);
    observable.subscribe(
      (response: any) => {
        alert("success");
        this.router.navigate(['/thankYou']);
      },
      function (error) {
        console.log(error);
        alert('Something went wrong please try again!');
      }
    );
  }

}
