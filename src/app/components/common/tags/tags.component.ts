import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Input() tag!: string;
  
  constructor(private filterService: FilterService, private router: Router) { }

  ngOnInit(): void {
  }

  removeFilter(tag: string): void {
    let i = this.filterService.selectedFilterTags.findIndex(filterTag => filterTag === tag);
    this.filterService.selectedFilterTags.splice(i, 1)
    this.router.navigate(['/beers'], {queryParams: {[tag]:undefined}, queryParamsHandling: 'merge' })
  }

}
