import { Component, Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-input-with-label',
  templateUrl: './input-with-label.component.html',
  styleUrls: ['./input-with-label.component.scss']
})
export class InputWithLabelComponent implements OnInit {

  @Input() inputId?: string;
  @Input() label?: string;
  @Input() type?: string;
  @Input() placeholder?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
