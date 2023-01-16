import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import AuthRoutingModule from './auth-routing.module';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,

  ],
  exports: [LoginComponent],

})
export class AuthModule { }
