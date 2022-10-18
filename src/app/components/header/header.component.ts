import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { BeersService } from '../../services/beers.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public beersService: BeersService, public cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }

  navigateHome(): void {
    this.router.navigate(['beers'])
  }

  showFavourites() {
   this.beersService.getFavouriteBeers().subscribe(beers => {
    this.beersService.beers$.next(beers)
   })
  //  this.router.navigate(['beers/whislist'])
  }
}
