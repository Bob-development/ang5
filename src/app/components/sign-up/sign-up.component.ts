import { Component } from '@angular/core';

import { MyEmailErrorStateMatcher, MyPasswordErrorStateMatcher } from '../../classes/MyErrorStateMatcher';

import {
  FormControl,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent {
  public emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public emailMatcher = new MyEmailErrorStateMatcher();

  public passFormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  public passMatcher = new MyPasswordErrorStateMatcher();
}
