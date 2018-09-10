"use strict"
import { Injectable } from '@angular/core'
import { Http ,Response,Headers} from '@angular/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { Hotel } from '../model/hotel'
import { environment } from '../../environments/environment'

@Injectable()
export class HotelsService{
	constructor(private _http:Http){}

	addHotel(hotel:Hotel){
		let json = JSON.stringify(hotel)
		let headers = new Headers({"Content-Type":"application/json"})

		return this._http.post(environment.apiUrl + environment.apiUrlPort + '/hotels',json,{headers:headers})
			.pipe(map(res => res.json()))
	}

	deleteHotel(id:string){
		return this._http.delete(environment.apiUrl + environment.apiUrlPort + '/hotels/id/' + id)
			.pipe(map(res=> res))
	}

	filterHotels(values:any){
		let query = '?'

		values.forEach(facet =>{
			if(facet.value !== ""){
				if(query === '?'){
					query = query + facet.sysname + "=" + facet.value
				} else {
					query = query + "&" + facet.sysname + "=" + facet.value
				}
			}
		})

		return this._http.get(environment.apiUrl + environment.apiUrlPort + '/hotels/filter/' + query)
			.pipe(map(res=> res.json()))
	}
	
	getHotel(id:string){
		return this._http.get(environment.apiUrl + environment.apiUrlPort + '/hotels/id/' + id)
			.pipe(map(res=>res.json()))
	}
	
	getHotels(){
		return this._http.get(environment.apiUrl + environment.apiUrlPort + '/hotels')
			.pipe(map(res => res.json()))
	}

	updateHotel(hotel:Hotel, hotelCode:string){
		let json = JSON.stringify(hotel)
		let headers = new Headers({"Content-Type":"application/json"})
		return this._http.put(environment.apiUrl + environment.apiUrlPort + '/hotels/id/' + hotelCode,json,{headers})
			.pipe(map(res => res.json()))
	}
}