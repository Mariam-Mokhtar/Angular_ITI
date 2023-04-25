import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  private Id:any;
  student:any;
  constructor(myRoute:ActivatedRoute,private myService: StudentsService) {  //injection service
    // fetch when open
    this.Id=myRoute.snapshot.params['id'];
  }
  ngOnInit(): void { //make sure that id already exist
    this.myService.GetStudentById(this.Id).subscribe(
      {
        next: (data) => {
          this.student = data;
        },
        error: (err) => {
          console.log(err)
        },
      }
    );
  }
}
