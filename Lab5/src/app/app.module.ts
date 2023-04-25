import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistraionComponent } from './components/registraion/registraion.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { StudentUpdateComponent } from './components/student-update/student-update.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistraionComponent,
    StudentsComponent,
    StudentDetailsComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    StudentUpdateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
