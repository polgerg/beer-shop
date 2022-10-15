import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeersComponent } from './beers.component';
import { BeersRoutingModule } from './beers-routing.module';



@NgModule({
  declarations: [
    BeersComponent
  ],
  imports: [
    CommonModule,
    BeersRoutingModule
  ]
})
export class BeersModule { }
