import { Component, EventEmitter, forwardRef, Injector, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from '../utils/control-value-accessor-connector';

type TypeInput = 'text' | 'email' | 'password'

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent extends ControlValueAccessorConnector implements OnInit {
  @Input() type = 'text';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() readonly = false;
  @Input() icon = '';

  @Output() clickedIcon: EventEmitter<void> = new EventEmitter();

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  onIconClick() {
    this.clickedIcon.emit();
  }

}
