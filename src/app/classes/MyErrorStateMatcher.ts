import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyEmailErrorStateMatcher implements ErrorStateMatcher {
    public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

export class MyPasswordErrorStateMatcher implements ErrorStateMatcher {
    public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        if(control.value){

        }

        return true
    }
}