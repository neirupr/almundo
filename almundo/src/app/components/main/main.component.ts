"use strict"
import { Component } from '@angular/core'

@Component({
	selector: 'almundo',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent {
	public imgSrc = ''

	closeModal(input:boolean){
		if(!input){
			this.imgSrc=''
		}
	}
}
