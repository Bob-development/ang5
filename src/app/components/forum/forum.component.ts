import { Component } from '@angular/core';
import { UsersControllerService } from '../../services/users-controller.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css'
})
export class ForumComponent {
  constructor(
    public userController: UsersControllerService
  ){
    
  }


}
