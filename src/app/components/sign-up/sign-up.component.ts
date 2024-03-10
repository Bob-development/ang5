import { Component } from '@angular/core';

import { MyEmailErrorStateMatcher, MyPasswordErrorStateMatcher, isValidData } from '../../classes/MyErrorStateMatcher';

import {
  FormControl,
  Validators,
} from '@angular/forms';

import { UsersControllerService } from '../../services/users-controller.service';
import { Router } from '@angular/router';
import { IPerson } from '../../../interfaces/Person';

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

  public isValidData: boolean = isValidData();

  public nickName = new FormControl();
  
  constructor(
    public usersControllerService: UsersControllerService,
    public router: Router
  ){}

  public signUp(){      
    if(this.emailFormControl.value.length !== 0 && this.passFormControl.value.length !== 0 && isValidData() && this.nickName.value !== null){
      const user: IPerson = {
        email: this.emailFormControl.value,
        password: this.passFormControl.value,
        name: this.nickName.value,
        friends: [],
        isAuthorized: true
      }

      this.router.navigate([''])
      
      this.usersControllerService.addUserToData(user);

      this.usersControllerService.enableAuthorizedUser(user);
      
      console.log(this.usersControllerService.getUsers());
    } else alert('Invalid data!!!')
  }
}
