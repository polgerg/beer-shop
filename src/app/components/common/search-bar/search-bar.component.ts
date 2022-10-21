import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FilterService } from 'src/app/services/filter.service';
import { BeersService } from '../../../services/beers.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() placeholder?: string;

  searchForm: FormGroup

  constructor(fb: FormBuilder, private beerService: BeersService, private filterService: FilterService, private router: Router) { 
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
      this.router.navigate(['/beers'], {queryParams: {'beer_name': this.search.value}, queryParamsHandling: 'merge' })
    } else {
      this.router.navigate(['/beers'], {queryParams: {'beer_name': undefined }, queryParamsHandling: 'merge' })
    }
  }

}
