import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.css']
})
export class RegistraionComponent {
  validForm = false;
  validationForm = new FormGroup({
    name: new FormControl(null,[Validators.minLength(3)]),
    age: new FormControl(null, [Validators.min(20), Validators.max(40)]),
    email: new FormControl(null, [Validators.email])
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


  Add() {
    if (this.validationForm.valid) {
      this.validForm = true;
    }
  }
}
