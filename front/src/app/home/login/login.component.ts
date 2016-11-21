import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { ApiService } from '../../api.service';
import { AlertService } from '../../alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	private user:User;
  constructor(
  	private api:ApiService,
    private alert:AlertService,
    private router:Router
    ) {
  	this.user=new User;

  }

  ngOnInit() {
  }

  login(){
  	this.api.create('user/login',this.user)
      .subscribe(
        data=>{
          if(data.success){
          	localStorage.setItem('WorkBoard',data.token);
          	this.router.navigate(['/board']);
          }
        },
        error=>{
          console.log(error);
        });
  }

}
