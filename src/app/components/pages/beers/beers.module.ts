import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeersComponent } from './beers.component';
import { BeersRoutingModule } from './beers-routing.module';
import { SharedModule } from '../../common/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BeersComponent
  ],
  imports: [
    CommonModule,
    BeersRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class BeersModule { }
