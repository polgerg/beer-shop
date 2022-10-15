import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'beers', pathMatch: 'full'},
  { path: 'beers', pathMatch: 'full', loadChildren: ()=> import('./components/pages/beers/beers.module').then(module => module.BeersModule) },
  { path: 'beer-details', loadChildren: ()=> import('./components/pages/beer-details/beer-details.module').then(module=> module.BeerDetailsModule)},
  { path: 'cart', loadChildren: ()=> import('./components/pages/cart/cart.module').then(module=> module.CartModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
