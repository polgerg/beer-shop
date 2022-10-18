import { Injectable } from '@angular/core';
import { Beer } from '../models/beer';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  inCart: CartItem[] = [];

  constructor() { }

  addToCart(beer: Beer, quantity: number): void {
    if(quantity > 0) {
      let wantedBeer = this.inCart.find(cartItem => cartItem.beer.id === beer.id)
      this.inCart.find(cartItem => {
        cartItem.beer.id === beer.id ? cartItem.quantity += quantity : null
      })
      if(!wantedBeer) {
        let item = {beer: beer, quantity: quantity}
        this.inCart.push(item)
      }
    }
  }
}
