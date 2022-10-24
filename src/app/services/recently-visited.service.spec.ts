import { TestBed } from '@angular/core/testing';
import * as testItems from '../testItems/testItems' 
import { RecentlyVisitedService } from './recently-visited.service';

describe('RecentlyVisitedService', () => {
  let service: RecentlyVisitedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentlyVisitedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an item to the recently visited items', () => {
    service.visitedItems = []
    service.addToRecentlyVisited(testItems.testBeer1)
    expect(service.visitedItems).withContext('visitedItems array should be equal').toEqual([testItems.testBeer1])
    expect(service.visitedItems.length).withContext('the number of items in visitedItems should be ').toEqual(1)
  })

  it('it should remove the earliest visited item, and add the last visited item to visited items, after the 4th visited item ', () => {
    service.visitedItems = [testItems.testBeer1, testItems.testBeer2, testItems.testBeer3, testItems.testBeer4]
    service.addToRecentlyVisited(testItems.testBeer5)
    expect(service.visitedItems.length).withContext('should not change the number of visited items from 4 to 5').toEqual(4)
    expect(service.visitedItems).withContext('items in visitedItems should be').toEqual([testItems.testBeer2, testItems.testBeer3, testItems.testBeer4, testItems.testBeer5])
  })
});
