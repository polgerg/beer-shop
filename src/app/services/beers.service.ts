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

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${BASE_URL}beers?page=3&per_page=80`).pipe(
      map((beers: Beer[]) => {
        return beers.map((beer: Beer) => {
          let editedBeer = this.beerAdditionalDetailsGenerator(beer)
          let beerObj = {...beer, editedBeer}
          return beerObj
        })
      })
    )
  }

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

  addToFavourites(id: string): void {
    this.favouriteBeers.push(id)
    // console.log(this.favouriteBeers)
  }

  removeFromFavourites(id: string): void {
    let i = this.favouriteBeers.findIndex(beerId => beerId === id);
    this.favouriteBeers.splice(i, 1)
    // console.log('asd', this.favouriteBeers)
    this.getFavouriteBeers().subscribe(beers => {
      this.beers$.next(beers)
    })
  }

  getBeersBySearch(value: string): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${BASE_URL}beers?beer_name=${value}`).pipe(
      map((beers: Beer[]) => {
        return beers.map((beer: Beer) => {
          let editedBeer = this.beerAdditionalDetailsGenerator(beer)
          let beerObj = {...beer, editedBeer}
          return beerObj
        })
      })
    )
  }

  getSelectedBeers(types: string[]): Observable<Beer[]> {
    let querys = types.join().replace(',','&')
    // console.log('types', types)
    // console.log(querys)
    // console.log(`${BASE_URL}beers?hops=${querys}`)
    if(types.length > 0) {
      return this.http.get<Beer[]>(`${BASE_URL}beers?hops=${querys}`).pipe(
        map((beers: Beer[]) => {
          return beers.map((beer: Beer) => {
          let editedBeer = this.beerAdditionalDetailsGenerator(beer)
          let beerObj = {...beer, editedBeer}
          return beerObj
          })
        })
      )
    } 
    return this.getBeers()
  }

  beerAdditionalDetailsGenerator(beer: Beer): Beer{
    beer.price = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
    beer.badge = Math.random() < 0.3;
    beer.badge? beer.badgeType = Math.floor(Math.random() * 3 + 1) : null;
    beer.badgeType === 3 ? beer.originalPrice = beer.price * 2 : null    
    beer.productOfTheWeek = Math.random() < 0.2;
    return beer
  }

  getFavouriteBeers(): Observable<Beer[]> {
    let copyOfFavBeers = this.favouriteBeers
    let queryParams = copyOfFavBeers.join().replace(',','|')
    // console.log(copyOfFavBeers)
    // console.log(queryParams)
    // console.log(`${BASE_URL}beers?ids=${queryParams}`)
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
}
