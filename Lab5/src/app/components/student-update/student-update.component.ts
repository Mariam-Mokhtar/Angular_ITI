import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent {
  private Id:any;
  student:any;
  validForm = false;
  constructor(myRoute:ActivatedRoute,private myService: StudentsService) {  //injection service
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
  validationForm = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3)]),
    age: new FormControl(null, [Validators.required,Validators.min(20), Validators.max(40)]),
    email: new FormControl(null, [Validators.required,Validators.email]),
    phone:new FormControl(null, [Validators.required,Validators.minLength(11), Validators.maxLength(11)])
  })

  get AgeValid() {
    return this.validationForm.controls["age"].valid;
  }
  get NameValid() {
    return this.validationForm.controls["name"].valid;
  }
  get EmailValid() {
    return this.validationForm.controls["email"].valid;
  }
  get PhoneVaild()
  {
    return this.validationForm.controls["phone"].valid;

  }
  
  update(name:any,email:any,age:any,phone:any) {
    if (this.validationForm.valid) {
      let newStudent = {name, age, email, phone};
      this.myService.UpdateStudent(this.Id,newStudent).subscribe();
      this.validForm = true;
    }
  }
}
