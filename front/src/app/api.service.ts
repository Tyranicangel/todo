import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private http:Http) { }

  private jwt(){
  	let authtoken=localStorage.getItem('WorkBoard');
  	if(authtoken){
  		let header=new Headers({'JWT-AuthToken':authtoken});
  		return new RequestOptions({headers:header})
  	}
  }

  getAll(path){
  	return this.http.get('/api/'+path,this.jwt()).map((response:Response)=>response.json());
  }

  get(path,data){
  	return this.http.get('/api/'+path+data,this.jwt()).map((response:Response)=>response.json());
  }

  create(path,data){
  	return this.http.post('/api/'+path,data,this.jwt()).map((response:Response)=>response.json());
  }

  update(path,data){
  	return this.http.put('/api/'+path,data,this.jwt()).map((response:Response)=>response.json());
  }

  delete(path,data){
  	return this.http.delete('/api/'+path+data,this.jwt()).map((response:Response)=>response.json());
  }

}
