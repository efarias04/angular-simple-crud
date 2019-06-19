import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray: Employee[] = [
    {id: 1, name: 'Fernando', country: 'Francia'},
    {id: 2, name: 'Maria', country: 'Australia'},
    {id: 3, name: 'Erika', country: 'Panama'},
  ];

  selecttedEmployee: Employee = new Employee();

  openForEdit(employee: Employee) {
    this.selecttedEmployee = employee;
  }

  addOrEdit() {
    if (this.selecttedEmployee.id === 0) {
      this.selecttedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selecttedEmployee);
    }

    this.selecttedEmployee = new Employee();
  }

  delete() {
    if (confirm('Are you sure to delete this person?')) {
      this.employeeArray = this.employeeArray.filter(x => x !== this.selecttedEmployee);
      this.selecttedEmployee = new Employee();
    }
  }
}
