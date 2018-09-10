"use strict"
import { Component, Output, EventEmitter } from '@angular/core'

@Component({
	selector: 'facet-container',
	templateUrl: './facet-container.component.html',
	styleUrls: ['./facet-container.component.scss']
})

export class FacetContainerComponent{
	@Output() filterHotel:EventEmitter<any> = new EventEmitter<any>()
	
	public searchText = ''
	public stars = ''
	public facetNameCollapsed = false
	public facetRatingCollapsed = false
	public hideMobileFacets = false
	public appliedFacets = [
		{
			name: 'Nombre',
			sysname: 'name',
			value: '',
			active: false
		},
		{
			name: 'Estrellas',
			sysname: 'stars',
			value: '',
			active: false
		}
	]

	filterHotels(value:any, type:string){
		if(value !== ''){
			this.modifyFacet(value, type, true)
			this.filterHotel.emit(this.appliedFacets)
			this.searchText = ''
		}
	}

	toggleFacet(facet:string){
		switch(facet){
			case 'name':
				this.facetNameCollapsed = !this.facetNameCollapsed
				break
			case 'rating':
				this.facetRatingCollapsed = !this.facetRatingCollapsed
				break
		}
	}

	toggleMobileFacets(){
		this.hideMobileFacets = !this.hideMobileFacets
	}

	modifyFacet(value, type, enabled){
		let facetObject = this.appliedFacets.find( obj => obj.sysname == type)

		if(enabled){
			if(value != ''){
				facetObject.active = enabled
				
				switch(type){
					case 'name':{
						this.facetNameCollapsed = true
						break
					}
					case 'stars':{
						this.facetRatingCollapsed = true
						break
					}
				}
			} 
			facetObject.value = value
		} else {
			facetObject.active = enabled
		}
		
		this.appliedFacets = this.appliedFacets.filter( obj => obj !== facetObject)
		this.appliedFacets.push(facetObject)
		this.appliedFacets.sort(this.compare)
	}

	removeFilter(facetObject){
		//Remove from applied facet list
		this.appliedFacets = this.appliedFacets.filter( obj => obj !== facetObject)

		facetObject.value = ''
		facetObject.active = false
		
		this.appliedFacets.push(facetObject)
		this.appliedFacets.sort(this.compare)

		//Reset facet values
		switch(facetObject.sysname){
			case 'name': {
				this.searchText = ''
				break
			}
			case 'stars': {
				this.stars = ''
				break
			}
		}

		//Send new request without the filter
		this.filterHotel.emit(this.appliedFacets)

		//Expand the facet
		switch(facetObject.sysname){
			case 'name':{
				this.facetNameCollapsed = false
			}
			case 'stars':{
				this.facetRatingCollapsed = false
			}
		}
	}

	compare(a,b){
		if(a.name < b.name) return -1
		if(a.name > b.name) return 1
		return 0
	}
}