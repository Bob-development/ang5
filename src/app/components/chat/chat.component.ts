import { Component } from '@angular/core';
import { UsersControllerService } from '../../services/users-controller.service';
import { MessageControllerService } from '../../services/message-controller.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent {
  public inputValue: string = '';
  public message: string = '';
  public chosenChat: string = '';

  constructor(
    public usersController: UsersControllerService,
    public messageService: MessageControllerService
  ){}

  public chooseChat(event: any){
    const buttonValue = event.target.value;

    console.log(buttonValue);
    
    // this.chosenChat = buttonValue;
  }
}
