import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Output() inputValue: EventEmitter<number> = new EventEmitter<number>()
  @Input() initValue: number = 0
  @Input() width?: string;
  @ViewChild('spinnerInput') spinnerInput?: ElementRef;

  constructor() {
   }

  ngOnInit(): void {
  }

  setQuantity(event: any) {
    this.inputValue.next(event.target.value)
  }

  increaseQuantity() {
    this.spinnerInput!.nativeElement.value++
    this.inputValue.next(parseInt(this.spinnerInput!.nativeElement.value))
  }

  decreaseQuantity(){
    this.spinnerInput!.nativeElement.value > 1 ? this.spinnerInput!.nativeElement.value-- : null
    this.inputValue.next(this.spinnerInput!.nativeElement.value)
  }
}
