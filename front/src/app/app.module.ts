import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AlertComponent } from './alert/alert.component';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { ApiService } from './api.service';
import { AlertService } from './alert/alert.service';


import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    HomeModule
  ],
  providers: [ApiService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
