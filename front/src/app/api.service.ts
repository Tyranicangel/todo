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
  	return this.http.get(path,this.jwt()).map((response:Response)=>response.json());
  }

  get(path,data){
  	return this.http.get(path+data,this.jwt()).map((response:Response)=>response.json());
  }

  create(path,data){
  	return this.http.post(path,data,this.jwt()).map((response:Response)=>response.json());
  }

  update(path,data){
  	return this.http.put(path,data,this.jwt()).map((response:Response)=>response.json());
  }

  delete(path,data){
  	return this.http.delete(path+data,this.jwt()).map((response:Response)=>response.json());
  }

}
