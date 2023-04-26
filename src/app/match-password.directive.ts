import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
@Directive({
  selector: '[appMatchPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchPasswordDirective, multi: true }]
})
export class MatchPasswordDirective implements Validator {
  @Input('appMatchPassword') matchControl!: AbstractControl;

  validate(control: AbstractControl): {[key:string]: any} | null {
    console.log("amira")
    const password = control.value;
    const confirmPassword = this.matchControl ? this.matchControl.value : null;

    if (password !== confirmPassword) {
      return { 'passwordMismatch': true };
    }

    return null;
  }
}