import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  stdName = "";
  stdAge = "";
  newStudent = {};
  Add() {
    if (+this.stdAge < 40 && +this.stdAge > 20 && this.stdName.length >= 3) {
      this.newStudent = { name: this.stdName, age: this.stdAge };
      this.fireNow();
      this.stdAge = "";
      this.stdName = "";
      this.newStudent = {};
    }
  }
  @Output() myEvent = new EventEmitter();
  fireNow() {
    this.myEvent.emit(this.newStudent);
  }
}
