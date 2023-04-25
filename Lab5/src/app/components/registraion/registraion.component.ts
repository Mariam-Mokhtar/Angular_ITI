import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';
@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.css']
})
export class RegistraionComponent {
  validForm = false;
  constructor(private myService : StudentsService){}
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


  Add(name:any,email:any,age:any,phone:any) {
    if (this.validationForm.valid) {
      let newStudent = {name, age, email, phone};
      this.myService.AddNewStudent(newStudent).subscribe();
      this.validForm = true;
    }
  }
}
