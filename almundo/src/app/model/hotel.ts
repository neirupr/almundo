export class Hotel{
	constructor(
		public id:string,
		public name:string,
		public stars:number,
		public image:string,
		public amenities:Array<string>
	){}
}