import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  id!: any;
  name!: string;
  sal!: any;
  status: boolean = false;
  btnname: string = 'Add';

  elist: Employee[] = [];
  addEmployee() {
    if (this.btnname === 'Add') {
      let empexist=false;
      for (let i=0; i<this.elist.length;i++) {
        if(this.elist[i].eid==this.id) {
          empexist = true;
          break;
        }
      }
      if(empexist) {
        alert("Employee already exists")
        return
      }
      this.elist.push({ eid: this.id, ename: this.name, esal: this.sal });
      this.clearFields();
    }
    else {
      this.updateEmployee();
      this.clearFields();
      this.btnname = 'Add';
    }
  }
  clearFields() {
    this.id = "";
    this.name = "";
    this.sal = "";

  }
  deleteEmployee(e: Employee) {
    for (let i = 0; i < this.elist.length; i++) {
      if (this.elist[i].eid == e.eid) {
        this.elist.splice(i, 1);
      }
    }
  }
  editEmployee(e: any) {
    this.id = e.eid;
    this.name = e.name;
    this.sal = e.sal;
    this.status = true;
    this.btnname = 'Update';
  }
  updateEmployee() {
    for (let i = 0; i < this.elist.length; i++) {
      if (this.elist[i].eid == this.id) {
        this.elist[i].ename = this.name;
        this.elist[i].esal = this.sal;
      }
    }
  }
}
class Employee {
  eid?: number;
  ename?: string;
  esal?: number;
}