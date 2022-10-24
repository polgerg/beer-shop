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
  @Input() radio!: string;
  
  constructor(private filterService: FilterService, private router: Router) { }

  ngOnInit(): void {
  }

  removeFilter(tag: string, radio: string): void {
    let i = this.filterService.selectedFilterTags.findIndex(filterTag => filterTag === tag);
    this.filterService.selectedFilterTags.splice(i, 1)
    Object.keys(this.filterService.radios).find(rad => rad === radio ? this.filterService.radios[radio] = null : null)
    this.router.navigate(['/beers'], {queryParams: {[tag]:undefined}, queryParamsHandling: 'merge' })
  }

}
