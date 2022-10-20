import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';
import { InputWithLabelComponent } from './input-with-label/input-with-label.component';
import { MenuItemIconComponent } from './menu-item-icon/menu-item-icon.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SecondaryButtonComponent } from './secondary-button/secondary-button.component';
import { TagsComponent } from './tags/tags.component';
import { TextButtonComponent } from './text-button/text-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { ModalSuccessComponent } from './modal-success/modal-success.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { CartItemComponent } from './cart-item/cart-item.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    CheckboxComponent,
    InputComponent,
    InputWithLabelComponent,
    MenuItemIconComponent,
    PrimaryButtonComponent,
    ProductCardComponent,
    SearchBarComponent,
    SecondaryButtonComponent,
    TagsComponent,
    TextButtonComponent,
    SpinnerComponent,
    ModalSuccessComponent,
    CartItemComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    BreadcrumbsComponent,
    CheckboxComponent,
    InputComponent,
    InputWithLabelComponent,
    MenuItemIconComponent,
    PrimaryButtonComponent,
    ProductCardComponent,
    SearchBarComponent,
    SecondaryButtonComponent,
    TagsComponent,
    TextButtonComponent,
    SpinnerComponent,
    ModalSuccessComponent,
    CartItemComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
