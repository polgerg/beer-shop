import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeersComponent } from './beers.component';
import { BeersRoutingModule } from './beers-routing.module';
import { SharedModule } from '../../common/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    BeersComponent
  ],
  imports: [
    CommonModule,
    BeersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    InfiniteScrollModule
  ]
})
export class BeersModule { }

