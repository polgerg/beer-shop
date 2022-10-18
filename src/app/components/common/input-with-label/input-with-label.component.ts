import { Component, Input ,OnInit } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

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
  @Input() inputFormControl?: AbstractControl<any, any> | null;

  constructor() { }

  ngOnInit(): void {
  }

}
