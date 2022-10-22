import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhishlistRoutingModule } from './whishlist-routing.module';
import { WhishlistComponent } from './whishlist.component';
import { SharedModule } from '../../common/shared.module';


@NgModule({
  declarations: [
    WhishlistComponent
  ],
  imports: [
    CommonModule,
    WhishlistRoutingModule,
    SharedModule
  ],
  exports: [
    WhishlistComponent
  ]
})
export class WhishlistModule { }
