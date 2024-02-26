import { Component } from '@angular/core';
import { FriendsService } from '../../services/friends.service';
import { UsersControllerService } from '../../services/users-controller.service';
import { MessageControllerService } from '../../services/message-controller.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  public inputValue: string = '';

  constructor(
    public friendService: FriendsService,
    public userController: UsersControllerService,
    public messageService: MessageControllerService
  ){}
}
