import { Directive, Injector, Input, Type, ViewChild } from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective
} from '@angular/forms';

@Directive()
export class ControlValueAccessorConnector implements ControlValueAccessor {
  @ViewChild(FormControlDirective, { static: true })
  formControlDirective!: FormControlDirective;
  @Input() formControl!: FormControl;
  @Input() formControlName!: string;

  get control(): FormControl {
    return (
      this.formControl ||
      (this.controlContainer?.control?.get(this.formControlName) as FormControl)
    );
  }

  get hasErrors(): boolean {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }

  constructor(private injector: Injector) { }

  get controlContainer() {
    return this.injector.get(ControlContainer as Type<ControlContainer>);
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective?.valueAccessor?.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective?.valueAccessor?.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective?.valueAccessor?.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    //this.formControlDirective?.valueAccessor?.setDisabledState(isDisabled);
  }
}
