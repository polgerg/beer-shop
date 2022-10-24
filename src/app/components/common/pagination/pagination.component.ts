import { Component, Input, OnInit, Output } from '@angular/core';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() numberOfDots!: number
  @Input() startingPage!: number

  constructor(public paginatonService: PaginationService) { }

  ngOnInit(): void {
    this.paginatonService.selectedPage$.next(this.startingPage)
  }

  selectPage(x: number): void {
    this.paginatonService.selectedPage$.next(x+1) 
  }

  pageDown() {
    if(this.paginatonService.selectedPage$.getValue() > 1) {
      this.paginatonService.selectedPage$.next(this.paginatonService.selectedPage$.getValue() - 1)
    }
  }

  pageUp() {
    if(this.paginatonService.selectedPage$.getValue() < this.numberOfDots) {
      this.paginatonService.selectedPage$.next(this.paginatonService.selectedPage$.getValue() + 1)
    }
  }

}
