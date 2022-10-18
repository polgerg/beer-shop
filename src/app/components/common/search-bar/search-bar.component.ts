import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BeersService } from '../../../services/beers.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() placeholder?: string;

  searchForm: FormGroup

  constructor(fb: FormBuilder, private beerService: BeersService) { 
    this.searchForm = fb.group({
      search :['', [Validators.minLength(3), Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  get search(): FormControl {
    return this.searchForm?.get('search') as FormControl
  }

  onSearch(): void {
    if(this.searchForm.valid) {
      console.log(this.searchForm.valid)
      this.beerService.getBeersBySearch(this.search.value).subscribe(beers => {
        this.beerService.beers$.next(beers)
      })
    } else {
      console.log(this.searchForm.valid)
      this.beerService.getBeers().subscribe(beers => {
        this.beerService.beers$.next(beers)
      })
    }
    this.search.setValue('')
  }

}
