import { Component, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() numberOfDots!: number
  @Output() selectedPage$: BehaviorSubject<number> = new BehaviorSubject<number>(3)

  constructor() { }

  ngOnInit(): void {
  }

  selectPage(x: number): void {
    this.selectedPage$.next(x+1) 
  }

  pageDown() {
    if(this.selectedPage$.getValue() > 1) {
      this.selectedPage$.next(this.selectedPage$.getValue() - 1)
    }
  }

  pageUp() {
    if(this.selectedPage$.getValue() < this.numberOfDots) {
      this.selectedPage$.next(this.selectedPage$.getValue() + 1)
    }
  }

}
