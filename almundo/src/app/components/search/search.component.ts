import { Component,OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnChanges{
	public appliedFacets = []

	searchParamChanged(param:any){
		this.appliedFacets = param
	}

	ngOnChanges(changes: SimpleChanges){
		console.log("changing")
		let values: SimpleChange = changes.appliedFacets;

		console.log(values)
	}
}
