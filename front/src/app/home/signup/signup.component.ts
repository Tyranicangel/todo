import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { ApiService } from '../../api.service';
import { AlertService } from '../../alert/alert.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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

  register(){
    this.api.create('user',this.user)
      .subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/login']);
        },
        error=>{
          console.log(error);
        });

    // this.alert.success('Registration',true);
  }

}
