import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeersComponent } from './beers.component';

const routes: Routes = [
    { path: '', component: BeersComponent},
    { path: 'beers/beer-details/:id', loadChildren: ()=> import('./beer-details/beer-details.module').then(module=> module.BeerDetailsModule)},
]
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class BeersRoutingModule { }