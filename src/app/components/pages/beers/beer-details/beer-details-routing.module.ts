import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerDetailsComponent } from './beer-details.component';

const routes: Routes = [
    { path: '', component: BeerDetailsComponent}
]
  
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BeerDetailsRoutingModule { }