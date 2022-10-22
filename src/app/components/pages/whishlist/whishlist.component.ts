import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, forkJoin, switchMap, tap } from 'rxjs';
import { Beer } from 'src/app/models/beer';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.scss']
})
export class WhishlistComponent implements OnInit {

  constructor(public beersService: BeersService) { }

  ngOnInit(): void {

  }

}
