import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerDetailsComponent } from './beer-details.component';
import { BeerDetailsRoutingModule } from './beer-details-routing.module';



@NgModule({
  declarations: [
    BeerDetailsComponent
  ],
  imports: [
    CommonModule,
    BeerDetailsRoutingModule
  ]
})
export class BeerDetailsModule { }
