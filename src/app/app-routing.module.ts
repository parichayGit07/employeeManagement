import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddEmployeeFormComponent } from './components/add-employee-form/add-employee-form.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { HomeComponent } from './components/home/home.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes: Routes = [{path:'home' ,component: HomeComponent}, {path:'about', component: AboutComponent}, {path:'register', component:AddEmployeeFormComponent},
{path:'listOfEmployee', component:EmployeesListComponent} , {path:'thankYou', component:ThankYouComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
