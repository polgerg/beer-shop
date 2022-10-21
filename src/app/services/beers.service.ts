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

  favouriteBeers: string[] = []
  beers$: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>([])

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

  getBeers(QueryParams: any): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${BASE_URL}beers`, {params: QueryParams}).pipe(
      map((beers: Beer[]) => {
        return beers.map((beer: Beer) => {
          let editedBeer = this.beerAdditionalDetailsGenerator(beer)
          let beerObj = {...beer, editedBeer}
          return beerObj
        })
      })
      )
  }
    
  getFavouriteBeers(): Observable<Beer[]> {
    let copyOfFavBeers = this.favouriteBeers
    console.log(this.favouriteBeers)
    let queryParams = copyOfFavBeers.join('|')
    return this.http.get<Beer[]>(`${BASE_URL}beers?ids=${queryParams}`).pipe(
      map((beers: Beer[]) => {
      return beers.map((beer: Beer) => {
        let editedBeer = this.beerAdditionalDetailsGenerator(beer)
        beer.isFavourite = true;
        let beerObj = {...beer, editedBeer}
        return beerObj
      })
    })
    )
  }
  
  addToFavourites(id: string): void {
    let wantedBeer = this.favouriteBeers.find(beerId => beerId === id)
    !wantedBeer &&
    this.favouriteBeers.push(id)
    console.log(this.favouriteBeers)
  }

  removeFromFavourites(id: string): void {
    let i = this.favouriteBeers.findIndex(beerId => beerId === id);
    this.favouriteBeers.splice(i, 1)
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
    return beer
  }
}
  