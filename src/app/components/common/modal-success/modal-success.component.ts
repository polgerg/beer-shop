import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html',
  styleUrls: ['./modal-success.component.scss']
})
export class ModalSuccessComponent implements OnInit {

  @Input() text?: string;
  @Input() link?: string;
  @Input() isVisible?: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  hideModal(): void {
    this.isVisible = false
  }

}
