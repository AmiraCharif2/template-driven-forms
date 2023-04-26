import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ConfirmEqualValidatorDirective,
      multi: true,
    },
  ],
})
export class ConfirmEqualValidatorDirective implements Validator {
  @Input() appConfirmEqualValidator = '';

  validate(control: AbstractControl): { [key: string]: any } | null {
    console.log('amira');

    const controlToCompare = control.parent?.get(this.appConfirmEqualValidator);
    console.log(controlToCompare?.value);
    console.log(control.value);
    if (controlToCompare && controlToCompare.value != control.value) {
      return { notEqaul: true };
    }
    return null;
  }

  constructor() {}
}
