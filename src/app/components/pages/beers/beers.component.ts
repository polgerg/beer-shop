import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeersService } from '../../../services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit, OnDestroy {

  types: Array<any> = [
    { name: 'MOSAIC', value: 'Mosaic'},
    { name: 'SIMCOE', value: 'Simcoe'},
    { name: 'MOSAIC', value: 'Saaz'},
  ]
  selectedBeers: string[] = []

  isTypeFilterVisible: boolean = true;

  constructor(public beersService: BeersService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.beersService.getBeers().subscribe(beers => {
      this.route.snapshot.url.length < 1 &&
      this.beersService.beers$.next(beers)
    })
  }

  onCheckboxChange(event: any, type: string) {
    if(event.target.checked) {
      this.selectedBeers.push(type)
    } else {
      const index = this.selectedBeers.findIndex(x => x === type);
      this.selectedBeers.splice(index, 1)
    }
    // console.log(this.selectedBeers)
    this.beersService.getSelectedBeers(this.selectedBeers).subscribe(beers => {
      this.beersService.beers$.next(beers)
    }) 
  }
  ngOnDestroy() {
    let subscription = this.beersService.getBeers().subscribe(beers => {
      this.beersService.beers$.next(beers)    
    })
    subscription.unsubscribe()
    
  }
}
