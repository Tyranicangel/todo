import { Component, OnInit } from '@angular/core';
import { Animations } from '../../animation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:any={};
  constructor() { }

  ngOnInit() {
  }

}
