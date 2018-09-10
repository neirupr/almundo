"use strict"
import { Component, Inject, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core'
import { HotelsService } from '../../service/hotel.service'
import { Hotel } from '../../model/hotel'
import { MainComponent } from '../main/main.component'

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, OnChanges {
	@Input() appliedFacets: any
	public hotels:Hotel[]
	public requestError: string

	constructor(
		private _hotelsService: HotelsService,
		@Inject(MainComponent) private _mainComponent:MainComponent
	) {}

	ngOnInit() {
		this._hotelsService.getHotels()
			.subscribe(
				result => {
					this.hotels = result.hotels
				},

				error => {
					this.requestError = JSON.parse(error.text()).message() || "Error en la petición"
				})
	}

	ngOnChanges(changes: SimpleChanges){
		let values: SimpleChange = changes.appliedFacets;

		if(values.currentValue !== values.previousValue){
			this.filterHotels(values.currentValue)
		}
	}

	filterHotels(values:any){
		this._hotelsService.filterHotels(values)
			.subscribe(
				result => {
					this.hotels = result.hotels
				},

				error => {
					this.requestError = JSON.parse(error.text()).message() || "Error en la petición"
				})
	}

	openModal(imgSrc:string){
		this._mainComponent.imgSrc = imgSrc
	}
}
