import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  Students=[
    {name:"Mariam Mokhtar",age:"23"},
    {name:"Ghina Amir",age:"6"},
    {name:"Sondos Mohamed",age:17}
  ];
}
