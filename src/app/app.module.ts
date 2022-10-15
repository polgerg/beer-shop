import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/common/product-card/product-card.component';
import { InputComponent } from './components/common/input/input.component';
import { CheckboxComponent } from './components/common/checkbox/checkbox.component';
import { PrimaryButtonComponent } from './components/common/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './components/common/secondary-button/secondary-button.component';
import { TextButtonComponent } from './components/common/text-button/text-button.component';
import { SearchBarComponent } from './components/common/search-bar/search-bar.component';
import { TagsComponent } from './components/common/tags/tags.component';
import { BreadcrumbsComponent } from './components/common/breadcrumbs/breadcrumbs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputWithLabelComponent } from './components/common/input-with-label/input-with-label.component';
import { MenuItemIconComponent } from './components/common/menu-item-icon/menu-item-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    InputComponent,
    CheckboxComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    TextButtonComponent,
    SearchBarComponent,
    TagsComponent,
    BreadcrumbsComponent,
    InputWithLabelComponent,
    MenuItemIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
