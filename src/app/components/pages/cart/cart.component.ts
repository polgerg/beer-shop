import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Beer } from 'src/app/models/beer';
import { BeersService } from 'src/app/services/beers.service';
import { CartService } from 'src/app/services/cart.service';
import { PaginationService } from 'src/app/services/pagination.service';
import { RecentlyVisitedService } from 'src/app/services/recently-visited.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  customerBeers: Observable<Beer[]> = new Observable<Beer[]>()

  constructor(
    public cartService: CartService, 
    public recentlyVisitedService: RecentlyVisitedService, 
    private beersService: BeersService,
    private paginatonService: PaginationService
  ) { }

  ngOnInit(): void {
    this.paginatonService.selectedPage$.subscribe(page =>{
      this.customerBeers = this.beersService.getCustomersBeers(page)
    })
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
    return (this.getNetSubtotal() + this.calcVAT()) >= 500 || this.cartService.inCart.length === 0
  }

  getOrderTotal(): number {
    return this.isFreeShipping() ? Math.round((this.getNetSubtotal() + this.calcVAT())*100)/100 : Math.round((this.getNetSubtotal() + this.calcVAT() + 10)*100)/100 
  }

  checkout() {
    console.log('We will navigate you to the checkout page soon..')
  }

}
