import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Board } from './board';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  private showCreate:boolean;
  private board:Board;
  private boards:Board[];
  constructor(private api:ApiService) { 
  	this.showCreate=false;
  	this.board=new Board;
  }

  ngOnInit() {
  	this.getBoardlist();
  }

  close(){
  	this.showCreate=false;
  }

  show(){
  	this.showCreate=true;
  	this.board=new Board;
  }

  getBoardlist(){
  	this.api.getAll('board')
      .subscribe(
        data=>{
          this.boards=data.map((val)=>{
            let b=new Board;
            b.setValues(val);
            return b;
          });
        },
        error=>{
          console.log(error);
        });
  }

  create(){
  	this.api.create('board',this.board)
      .subscribe(
        data=>{
          this.showCreate=false;
          this.getBoardlist();
        },
        error=>{
          console.log(error);
        });
  }

}
