import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item-icon',
  templateUrl: './menu-item-icon.component.html',
  styleUrls: ['./menu-item-icon.component.scss']
})
export class MenuItemIconComponent implements OnInit {

  @Input() imgSrc?: string;
  @Input() menuLabel?: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
