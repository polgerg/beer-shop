import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Beer } from 'src/app/models/beer';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  favouriteBeers$: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>([])
  beers$: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>([])
  page: number = 1
  per_page: number = 12;

  constructor(private http: HttpClient) { }

  getBeer(id: string): Observable<Beer[]>{
    return this.http.get<Beer[]>(`${BASE_URL}beers?ids=${id}`).pipe(
      map((beers: Beer[]) => {
        return beers.map((beer: Beer) => {
          let editedBeer = this.beerAdditionalDetailsGenerator(beer)
          let beerObj = {...beer, editedBeer}
          return beerObj
        })
      })
    )
  }

  getBeers(queryParams: any): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${BASE_URL}beers?page=${this.page}&per_page=${this.per_page}`, {params: queryParams}).pipe(
      map((beers: Beer[]) => {
        return beers.map((beer: Beer) => {
          let editedBeer = this.beerAdditionalDetailsGenerator(beer)
          let beerObj = {...beer, editedBeer}
          return beerObj
        })
      })
      )
  }
    
  
  addToFavourites(beer: Beer): void {
    let favBeers = this.favouriteBeers$.getValue()
    let wantedBeer = favBeers.find(favBeer => favBeer.id === beer.id)
    !wantedBeer ? favBeers.push(beer) : null
    this.favouriteBeers$.next(favBeers)
  }

  removeFromFavourites(id: string): void {
    let favBeers = this.favouriteBeers$.getValue()
    let i = favBeers.findIndex(beer => beer.id === id);
    favBeers.splice(i, 1)
    this.favouriteBeers$.next(favBeers)
  }
  
  // Customers also bought function 
  getCustomersBeers(pageNumber: number): Observable<Beer[]> {
    console.log(`${BASE_URL}beers?page=${pageNumber}&per_page=3`)
    return this.http.get<Beer[]>(`${BASE_URL}beers?page=${pageNumber}&per_page=3`).pipe(
      map((beers: Beer[]) => {
        return beers.map((beer: Beer) => {
          let editedBeer = this.beerAdditionalDetailsGenerator(beer)
          let beerObj = {...beer, editedBeer}
          return beerObj
        })
      })
    )
  }

  beerAdditionalDetailsGenerator(beer: Beer): Beer{
    beer.price = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
    beer.badge = Math.random() < 0.3;
    beer.badge? beer.badgeType = Math.floor(Math.random() * 3 + 1) : null;
    beer.badgeType === 3 ? beer.originalPrice = beer.price * 2 : null    
    beer.productOfTheWeek = Math.random() < 0.2;
    beer.isFavourite = false
    this.favouriteBeers$.getValue().find(beer => beer.id === beer.id ? beer.isFavourite = true : null)
    return beer
  }
}
  