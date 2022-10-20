import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeersComponent } from './components/pages/beers/beers.component';

const routes: Routes = [
  { path: '', redirectTo: 'beers', pathMatch: 'full'},
  { path: 'beers', pathMatch: 'full', loadChildren: ()=> import('./components/pages/beers/beers.module').then(module => module.BeersModule) },
  { path: 'beers/whishlist', component: BeersComponent},
  { path: 'cart', loadChildren: ()=> import('./components/pages/cart/cart.module').then(module=> module.CartModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
