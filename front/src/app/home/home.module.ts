import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HomeRouting,
    FormsModule
  ],
  declarations: [HomeComponent, LoginComponent, SignupComponent, ForgotComponent, MainComponent],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
