import { Component } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  student = {
    name: "Mariam Mokhtar",
    age: "23",
    phone: "01201054687",
    email: "Mariamreda1819@gmail.com",
    address: "92 st el-maks, Alexandria, Egypt"
  }
}
