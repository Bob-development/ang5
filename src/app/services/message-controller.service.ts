import { Injectable } from '@angular/core';
import { IMessage } from '../../interfaces/Message';

@Injectable({
  providedIn: 'root'
})
export class MessageControllerService {
  private messages: IMessage[] = []

  constructor() {}

  public createSendMessage(sender: string, reciever: string, message: string){
    const newMessage: IMessage = {
      sender: sender,
      reciever: reciever,
      message: message,
    }

    this.messages.push(newMessage);

    console.log(this.messages);
    
  }

  public getMessagesFromTo(sender: string, reciever: string){
    const newArr = this.messages.filter((message) =>{
      const condition = (message.sender === sender && message.reciever === reciever) || (message.sender === reciever && message.reciever === sender);
  
      if(condition){
        return true;
      }
    })
  
    return newArr;
  }
}
