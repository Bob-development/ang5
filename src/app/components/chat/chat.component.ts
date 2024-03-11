import { Component } from '@angular/core';
import { UsersControllerService } from '../../services/users-controller.service';
import { MessageControllerService } from '../../services/message-controller.service';
import { IMessage } from '../../../interfaces/Message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent {
  public findFriend: string = '';
  public message: string = '';
  public messages: IMessage[] = [];
  public chosenChat: string = null;

  private authorizedUser: string = this.usersController.getAuthorizedUser().name;

  constructor(
    public usersController: UsersControllerService,
    public messageService: MessageControllerService
  ){}

  public chooseChat(event: any){
    const buttonValue = event.target.value;

    this.chosenChat = buttonValue;
    
    this.messages = this.messageService.getMessagesFromTo(this.authorizedUser, this.chosenChat);
  }

  public sendMessage(){
    if(this.authorizedUser && this.chosenChat){
      this.messageService.createSendMessage(this.authorizedUser, this.chosenChat, this.message);
      this.messages = this.messageService.getMessagesFromTo(this.authorizedUser, this.chosenChat);

    } else alert('Choose chat or Sign In!')
  }

  public showMessages(){

  }
}
