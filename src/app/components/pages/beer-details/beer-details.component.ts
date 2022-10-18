import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from 'src/app/models/beer';
import { BeersService } from 'src/app/services/beers.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss']
})
export class BeerDetailsComponent implements OnInit {

  beer?:Beer
  quantity: number = 1
  isAddedToCart: boolean = false;

  constructor(private beersService: BeersService, private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.beersService.getBeer(id).subscribe(beer => this.beer = beer[0])
  }

  setQuantity(quantity: any): void {
    this.quantity = quantity
  }

  addToCart(beer: Beer) {
    this.isAddedToCart = true
    this.cartService.addToCart(beer, this.quantity)
  }
}


