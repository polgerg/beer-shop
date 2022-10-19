import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html',
  styleUrls: ['./modal-success.component.scss']
})
export class ModalSuccessComponent implements OnInit {

  @Input() text?: string;
  @Input() link?: string;
  // @Input() isVisible?: boolean = false;

  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }

  hideModal(): void {
    this.buttonClick.emit()
  }

}
