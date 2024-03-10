import { Component } from '@angular/core';

import { MyEmailErrorStateMatcher, MyPasswordErrorStateMatcher, isValidData } from '../../classes/MyErrorStateMatcher';

import {
  FormControl,
  Validators,
} from '@angular/forms';

import { UsersControllerService } from '../../services/users-controller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  public emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public emailMatcher = new MyEmailErrorStateMatcher();

  public passFormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  public passMatcher = new MyPasswordErrorStateMatcher();
  
  constructor(
    public usersControllerService: UsersControllerService,
    public router: Router
  ){}

  public signIn(){      
    const users = this.usersControllerService.getUsers();

    for(const user of users){
      console.log(user);
      
      if(user.email === this.emailFormControl.value && user.password === this.passFormControl.value){
        this.usersControllerService.enableAuthorizedUser(user);
        
        this.router.navigate([""]);
        console.log(this.usersControllerService.getAuthorizedUser());
        
      }
    }
  }
}
