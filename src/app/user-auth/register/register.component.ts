import { Component } from '@angular/core';
import {  Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router){}
 

  goToLogin(){
    this.router.navigateByUrl('user-auth/login');
    // this.router.navigate(['login'], {relativeTo:this.route});
    // console.log('This text is working');
  }
  
  goToDashboard(){
    this.router.navigateByUrl('admin/dashboard');
    // this.router.navigate(['dashboard'], {relativeTo:this.route});
  }
}
