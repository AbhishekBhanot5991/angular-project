import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import {  Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  // loginForms: any[];
  @ViewChild('f')
  loginForms!: NgForm;
  constructor(private router: Router){}
 
  // onSubmit(form: NgForm){
  //   console.log(form);
  // }
  onSubmit(){
    console.log(this.loginForms);
  }
  goToRegister(){
    this.router.navigateByUrl('user-auth/register');
  }
  // goToDashboard(){
  //   this.router.navigateByUrl('admin/dashboard');
  // }
}
