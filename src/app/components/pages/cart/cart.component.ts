import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { RecentlyVisitedService } from 'src/app/services/recently-visited.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService, public recentlyVisitedService: RecentlyVisitedService) { }

  ngOnInit(): void {
  }

  getNetSubtotal(): number{
    let subTotal = 0
    this.cartService.inCart.forEach(item => subTotal += item.beer.price * item.quantity)
    return Math.round(subTotal*100)/100;
  }

  calcVAT(): number {
    return Math.round((this.getNetSubtotal() * 0.2)*100)/100; 
  }

  isFreeShipping(): boolean {
    return (this.getNetSubtotal() + this.calcVAT()) >= 500
  }

  getOrderTotal(): number {
    return this.isFreeShipping() ? Math.round((this.getNetSubtotal() + this.calcVAT())*100)/100 : Math.round((this.getNetSubtotal() + this.calcVAT() + 10)*100)/100 
  }

  checkout() {
    console.log('We will navigate you to the checkout page soon..')
  }

}
