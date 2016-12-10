import { Component, OnInit, OnDestroy } from '@angular/core';


import { ChatService } from '../service/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit, OnDestroy {
  message:string;
  messages: any = [];
  connection: any;  // object tam de gan ngOnInit va ngOnDestroy sau do 
  username: string;
  alert: any = false;


  constructor(private _chatService: ChatService){


  }


  // client send a message to server
  sendMessage(){
      this._chatService.sendMessage(this.message, this.username);
      console.log(this.username +' --> Server: '+this.message);
      this.message = '';
  }


  ngOnInit(){
      this.connection = this._chatService.getMessages().subscribe(message=>{
          console.log('Server --> Client: ');
          console.log(message)
          this.messages.push(message);
      })
  }
  ngOnDestroy(){
      this.connection.unsubcribe(); 
  }


//   setUsername(){
//       this._chatService.setUsername(this.username);
//       console.log('Username set: ', this.username);
//   }
}
