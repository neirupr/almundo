"use strict"
import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {MainComponent} from './components/main/main.component'
import {SearchComponent} from './components/search/search.component'

const appRoutes: Routes = [
    {path:'',redirectTo:'/search', pathMatch:'full'},
    {path:'search',component:SearchComponent},
]

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)