import { Injectable } from '@angular/core';
import { Beer } from '../models/beer';

@Injectable({
  providedIn: 'root'
})
export class RecentlyVisitedService {

  visitedItems: Beer[] = []

  constructor() { }

  addToRecentlyVisited(beer: Beer): void {
    if(this.visitedItems.length < 4) {
      this.visitedItems.push(beer)
    } else {
      this.visitedItems.splice(0,1);
      this.visitedItems.push(beer)
    }
  } 
}
