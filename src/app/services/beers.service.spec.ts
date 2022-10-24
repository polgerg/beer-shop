import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { BeersService } from './beers.service';

describe('BeersService', () => {
  let service: BeersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule]
    }).compileComponents();
    service = TestBed.inject(BeersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a beer from the API, with the selected id', waitForAsync (() => {
    service.getBeer('10').subscribe(beer => {
      expect(beer[0].name).withContext('the name of the recieved beer from the API should be').toEqual('Bramling X')
    })
  }))
});
