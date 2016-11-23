import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  private board_id:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  	this.board_id=this.route.snapshot.params['id'];
  	this.getBoardData()
  }

  getBoardData(){
  	
  }

}
