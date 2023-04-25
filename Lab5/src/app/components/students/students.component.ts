import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  Students: any;
  private deletedID: any
  constructor(private myService: StudentsService,private route: ActivatedRoute, private router: Router) {  //injection service
    // fetch when open
  }
  ngOnInit(): void {
    this.myService.GetAllStudents().subscribe(
      {
        next: (data) => {
          this.Students = data;
        },
        error: (err) => {
          console.log(err)
        },
      }
    );
  }
  setDeletedId(id: any) {
    this.deletedID = id;
  }
  deleteStudent()
  {
    this.myService.DeleteStudent(this.deletedID).subscribe();
    const currentUrl = this.router.url;
    const navigationExtras: NavigationExtras = {
      queryParams: { 'refresh': new Date().getTime() }
    };
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl], navigationExtras);
    });
  }
}
