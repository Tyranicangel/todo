export class Board {
	public title: string;
	public _id:string;

	constructor(){
		this.title="";
		this._id="";
	}

	setValues(arr:any){
		this.title=arr['title'];
		this._id=arr['_id'];
	}
}