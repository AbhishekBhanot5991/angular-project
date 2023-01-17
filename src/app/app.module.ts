import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {ButtonModule} from 'primeng/button';
// import { ArrayOfComponents } from './app-routing.module';
// import { AuthModule } from '@auth0/auth0-angular';
// import { environment as env } from '../environments/environment';
// import { LoginComponent } from './user-auth/login/login.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // TableModule,
    HttpClientModule,
    UserAuthModule,
    ButtonModule,
    AdminModule,
    BrowserAnimationsModule,

    // AuthModule.forRoot({
    //   ...env.auth
    // }),
    // LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
