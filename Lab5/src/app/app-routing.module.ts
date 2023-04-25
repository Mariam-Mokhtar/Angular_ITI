import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistraionComponent } from './components/registraion/registraion.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { ErrorComponent } from './components/error/error.component';
import { StudentUpdateComponent } from './components/student-update/student-update.component';

const routes: Routes = [
  { path: "", component: StudentsComponent },
  { path: "register", component: RegistraionComponent },
  { path: "students", component: StudentsComponent },
  { path: "students/:id", component: StudentDetailsComponent },
  { path: "students/edit/:id", component: StudentUpdateComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
