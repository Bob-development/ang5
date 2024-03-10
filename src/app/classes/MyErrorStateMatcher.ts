import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

let isValidEmail = false;

let isValidPassword = false;

export class MyEmailErrorStateMatcher implements ErrorStateMatcher {
    public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      if(!!(control && control.invalid && (control.dirty || control.touched || isSubmitted))){
        isValidEmail = false;
        return true
      } else {
        isValidEmail = true;
        return false
      }
    }
}

export class MyPasswordErrorStateMatcher implements ErrorStateMatcher {
    public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        if (
            control.value.length >= 5 &&
            /\d/.test(control.value) &&
            /[a-zA-Z]/.test(control.value)
          ) {
            isValidPassword = true;

            return false;
          } else {
            isValidPassword = false;

            return (control.dirty || control.touched) && true
        }
    }
}

export const isValidData = () => {
    return isValidEmail && isValidPassword ? true : false;
}