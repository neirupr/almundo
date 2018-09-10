"use strict"
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { routing, appRoutingProviders } from './app.routing'

/*COMPONENTS*/
import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { FacetContainerComponent } from './components/facet-container/facet-container.component';

/*SERVICES*/
import { HotelsService } from './service/hotel.service';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ModalImgComponent } from './components/common/modal-img/modal-img.component';

@NgModule({
	declarations: [
		FacetContainerComponent,
		MainComponent,
		SearchComponent,
		SearchResultComponent,
		ModalImgComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routing
	],
	providers: [
		appRoutingProviders,
		HotelsService,
		MainComponent,
	],
	bootstrap: [MainComponent]
})
export class AppModule { }
