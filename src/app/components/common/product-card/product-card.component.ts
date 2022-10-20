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
  addedToFavourite: boolean = false;

  cartForm: FormGroup;

  constructor(private beersService: BeersService, private router:Router, fb: FormBuilder, private cartService: CartService) { 
    this.cartForm = fb.group({
      quantity: [1]
    })
  }

  ngOnInit(): void {
    // console.log(this.beersService.favouriteBeers)
    this.beersService.favouriteBeers.find(id => {
      if(id === this.beer?.id) {
      this.beer?.isFavourite ? this.addedToFavourite = true : false
      }
    }) 
  }


  toggleFavourite(beer: Beer): void {
    if(!this.addedToFavourite) {
      this.beersService.addToFavourites(beer.id)
    } else {
      this.beersService.removeFromFavourites(beer.id);
    }
    this.addedToFavourite = !this.addedToFavourite;
    console.log(this.beersService.favouriteBeers)
  }

  navigateTo(id: string) {
    this.router.navigate([`beers/beer-details/${id}`])
  }

  addToCart(): void {
    const quantity = this.cartForm.get('quantity')?.value
    this.cartService.addToCart(this.beer!, parseInt(quantity))
  }
}
