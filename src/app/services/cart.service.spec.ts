import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import * as testItems from '../testItems/testItems' 
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule]
    }).compileComponents();
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an item to cart', () => {
    service.addToCart(testItems.testBeer1, 1);
    expect(service.inCart.length).withContext('The number of inCart items should be').toEqual(1)
  });

  it('should increase the quantity of an item in cart',() => {
    service.inCart = [{beer:testItems.testBeer1, quantity: 10 }]
    service.addToCart(testItems.testBeer1, 2)
    expect(service.inCart[0].quantity).withContext('The quantity of testBeer, in inCart should be increased by').toEqual(12)
  })
});
