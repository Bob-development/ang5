import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersControllerService {
  private defaultUser: string = 'No Name';
  private authorizedUser: object | string = this.defaultUser;
  private isAuthorizedUser:boolean = false;
  private users: object[] = [];

  constructor() {}

  public getAuthorizedUser() {
    return this.authorizedUser;
  }

  public isUserAuthorized(){
    return this.isAuthorizedUser;
  }
  
  public setAuthorizedUser(user: object){
    this.authorizedUser = user;
  }

  public toogleAuthorizedUser(){
    typeof this.authorizedUser !== 'string' ? console.log('huy') : console.log('pizda');
  }

  public addUserToData(user: object){
    this.users.push(user);
  }
}
