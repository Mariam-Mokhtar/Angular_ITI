import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private readonly myClient:HttpClient) { }
  // URL
  // All Methods
  private readonly Base_url="http://localhost:3000/students";

  GetAllStudents(){
    return this.myClient.get(this.Base_url);
   }
  GetStudentById(id:any){
    return this.myClient.get(this.Base_url+"/"+id);
  }
  AddNewStudent(newStudent:any){
    return this.myClient.post(this.Base_url,newStudent);
  }
  DeleteStudent(studentId:any){
    return this.myClient.delete(this.Base_url+"/"+studentId);
  }
  UpdateStudent(id:any, updatedStudent:any){
    return this.myClient.put(this.Base_url + "/" + id, updatedStudent);
  }
}
