import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Beer } from 'src/app/models/beer';
import { CartService } from 'src/app/services/cart.service';
import { BeersService } from '../../../services/beers.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() beer?: Beer
  // addedToFavourite: boolean = false;

  cartForm: FormGroup;

  constructor(public beersService: BeersService, private router:Router, fb: FormBuilder, private cartService: CartService) { 
    this.cartForm = fb.group({
      quantity: [1]
    })
  }

  ngOnInit(): void {
    this.beersService.favouriteBeers$.getValue().find(beer => {
      if(beer.id === this.beer?.id) {
      this.beer?.isFavourite ? this.beer.isFavourite = true : false
      }
    }) 
  }

  navigateTo(id: string) {
    this.router.navigate([`beers/beer-details/${id}`])
  }

  addToCart(): void {
    const quantity = this.cartForm.get('quantity')?.value
    this.cartService.addToCart(this.beer!, parseInt(quantity))
  }

  addToFavourites(): void{
    this.beer!.isFavourite = true;
    this.beersService.addToFavourites(this.beer!)
  }

  removeFromFavourites(): void {
    this.beer!.isFavourite = false;
    this.beersService.removeFromFavourites(this.beer!.id) 
  }
}
