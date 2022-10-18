import { Component, OnInit } from '@angular/core';
import { BeersService } from '../../../services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  types: Array<any> = [
    { name: 'MOSAIC', value: 'Mosaic'},
    { name: 'SIMCOE', value: 'Simcoe'},
    { name: 'MOSAIC', value: 'Saaz'},
  ]
  selectedBeers: string[] = []

  isTypeFilterVisible: boolean = true;

  constructor(public beersService: BeersService) { 
  }

  ngOnInit(): void {
    this.beersService.getBeers().subscribe(beers => {
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
}
