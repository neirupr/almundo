"use strict"
import { Component, Inject } from '@angular/core'
import { SearchComponent } from '../search/search.component'

@Component({
	selector: 'almundo',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent {
	public imgSrc = ''

	constructor(
		@Inject(SearchComponent) private _search:SearchComponent){}

	closeModal(input:boolean){
		if(!input){
			this.imgSrc=''
		}
	}

	filterHotels(values:any){
		console.log(values)
		this._search.appliedFacets = values
	}
}
