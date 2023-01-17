import { Component } from '@angular/core';
// import { ThemeProvider } from '@material-ui/core';
import {Router} from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import {studentsData} from './students.json';
// import { TabledataService } from './tabledata.service';
// import * as studentsData from "../../../assets/students.json";
// interface Student{
//   name:String;
//   rollno:String;
//   course:String;
//   batch:String;
// }
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  student:any;
  constructor(private router: Router){}
  onLogout(){
    this.router.navigateByUrl('/')
  }

  ngOnInit(){

    this.student = [
      {firstname: "Abhishek", rollno: 1, course: "Bsc-IT", batch: "Morning"},
      {firstname: "Rajat", rollno: 2, course: "Bsc-IT", batch: "Evening"},
      {firstname: "Mohit", rollno: 4, course: "MCA", batch: "Morning"},
      {firstname: "Karan", rollno: 8, course: "MCA", batch: "Evening"},
      {firstname: "Raman", rollno: 10, course: "MCA", batch: "Morning "},
    ]
  }
}
