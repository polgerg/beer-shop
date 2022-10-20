import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem!: CartItem

  subTotal?: number

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    let total = this.cartItem.quantity * this.cartItem.beer.price
    this.subTotal = Math.round(total*100)/100;
  }

  setQuantity(event: any): void {
    this.cartItem.quantity = event
    this.cartService.inCart.find(item => {
      if(item.beer.id === this.cartItem.beer.id) {
        item.quantity = this.cartItem.quantity
      }
    })
    this.subTotal = Math.round((event * this.cartItem.beer.price)*100)/100
  }

  deleteCartItem(): void {
    const index = this.cartService.inCart.findIndex(item => item.beer.id === this.cartItem.beer.id);
    this.cartService.inCart.splice(index, 1)
    console.log(this.cartService.inCart)
  }
}
