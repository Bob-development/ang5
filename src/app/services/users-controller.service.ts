import { Injectable } from '@angular/core';
import { IPerson } from '../../interfaces/Person';

@Injectable({
  providedIn: 'root'
})

export class UsersControllerService {
  private defaultUser: string = '';
  private authorizedUser: any = this.defaultUser;
  private isUserAuthorized: boolean = false;
  private users: IPerson[] = [
    // {
    //     email: 'as@asd',
    //     password: 'zxcV12',
    //     name: 'John',
    //     friends: [
    //       {
    //         email: 'asd@asd',
    //         password: 'zxxV12',
    //         name: 'Mike',
    //         friends: [],
    //         isAuthorized: false
    //       },
    //       {
    //         email: 'ask@asd',
    //         password: 'zxcV12',
    //         name: 'Ellie',
    //         friends: [],
    //         isAuthorized: false
    //       }
    //     ],
    //     // isAuthorized: false
    //     isAuthorized: true
    // }
  ];

  constructor() {}

  public getUsers(){
    return this.users;
  }

  public getAuthorizedUser() {
    return this.authorizedUser;
  }

  public getAuthorizedUserFriends(){
    return this.authorizedUser.friends
  }

  public isAuthorizedUser(){
    return this.isUserAuthorized;
  }
  
  public enableAuthorizedUser(user: IPerson){
    this.authorizedUser = user;
    this.isUserAuthorized = true;
    user.isAuthorized = true;
  }

  public disableAuthorizedUser(){
    this.authorizedUser.isAuthorized = false;
    this.authorizedUser = this.defaultUser;
    this.isUserAuthorized = false;
  }

  public addUserToData(user: IPerson){
    this.users.push(user);
  }

  public addFriends(nameOfFriend: string){
    const friend: IPerson = this.users.filter((user) => user.name === nameOfFriend)[0]

    if(friend !== undefined){
      const authorizedUserFriends: IPerson[] = this.authorizedUser.friends;
  
      authorizedUserFriends.push(friend);

      console.log(this.authorizedUser);
      
    } else alert('I cant find ur friend :(')
  }
}
