"use strict"
import { Component, Output, Input, EventEmitter } from '@angular/core'

@Component({
	selector: 'modal-img',
	templateUrl: './modal-img.component.html',
	styleUrls: ['./modal-img.component.scss']
})
export class ModalImgComponent {
	@Input() imgSrc:string
	@Output() displayModal: EventEmitter<boolean> = new EventEmitter<boolean>()

	closeModal(){
		this.displayModal.emit(false)
	}
}
