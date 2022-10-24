import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Beer } from 'src/app/models/beer';
import { BeersService } from 'src/app/services/beers.service';
import { CartService } from 'src/app/services/cart.service';
import { RecentlyVisitedService } from 'src/app/services/recently-visited.service';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss']
})
export class BeerDetailsComponent implements OnInit, OnDestroy {

  beer?:Beer;
  customerBeers: Observable<Beer[]> = new Observable<Beer[]>()
  quantity: number = 1;
  isAddedToCart: boolean = false;
  getBeerSubs?: Subscription;
  selectedPageSubs?: Subscription;


  constructor(
    private beersService: BeersService, 
    private cartService: CartService, 
    private route: ActivatedRoute, 
    private visitedService: RecentlyVisitedService,
    private paginatonService: PaginationService
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.beersService.getBeer(id).subscribe(beer => {
      this.beer = beer[0]
      this.beersService.favouriteBeers$.getValue().find(favBeer => favBeer.id == this.beer!.id ? this.beer!.isFavourite = true : null)
      this.visitedService.addToRecentlyVisited(beer[0])
    })

    this.selectedPageSubs = this.paginatonService.selectedPage$.subscribe(page =>{
      this.customerBeers = this.beersService.getCustomersBeers(page)
    })
    
  }

  setQuantity(quantity: any): void {
    this.quantity = quantity
  }

  addToCart(beer: Beer) {
    this.isAddedToCart = true
    this.cartService.addToCart(beer, this.quantity)
  }

  setIsAddedToCart(): void {
    this.isAddedToCart = false;
  }

  addToFavourites(): void{
    this.beer!.isFavourite = true;
    this.beersService.addToFavourites(this.beer!)
  }

  removeFromFavourites(): void {
    this.beer!.isFavourite = false;
    this.beersService.removeFromFavourites(this.beer!.id) 
  }

  ngOnDestroy(): void {
    this.getBeerSubs?.unsubscribe();
    this.selectedPageSubs?.unsubscribe();
  }
}


