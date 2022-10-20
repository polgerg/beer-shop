import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerDetailsComponent } from './beer-details.component';
import { BeerDetailsRoutingModule } from './beer-details-routing.module';
import { SharedModule } from '../../../common/shared.module';



@NgModule({
  declarations: [
    BeerDetailsComponent
  ],
  imports: [
    CommonModule,
    BeerDetailsRoutingModule,
    SharedModule
  ]
})
export class BeerDetailsModule { }
