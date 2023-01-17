import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './user-auth/login/login.component';




const routes: Routes = [
 
  { path: '', redirectTo:'user-auth',pathMatch:"full"},
  // { path: '', redirectTo:'/login',pathMatch:"full"},
  { path: 'user-auth', 
  loadChildren: () => import('./user-auth/user-auth.module').then(m => m.UserAuthModule)},
  { path: 'admin', 
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},


  // { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 
 }
//  export const ArrayOfComponents = [LoginComponent, RegisterComponent, DashboardComponent]