import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';  // remember add some line in typings.d.ts


@Injectable()


export class ChatService {
    private url = 'http://localhost:8000';
    private socket: any;


    sendMessage(message: string, username: string){
        this.socket.emit('add-message', message, username);
    }


    // client get messages[]
    getMessages(){
        let observable = new Observable((observer:any) =>{
            this.socket = io(this.url);  //gan socket lang nghe localhost:8000. Neu nhan duoc event'messaage' thi observer.next(); 
            this.socket.on('message', (data:any)=>{  
                observer.next(data);
            });
            return () =>{
                this.socket.disconnect();
            }
        })
        return observable;
    }


    // setUsername(username: string){
    //     sessionStorage.setItem('username', username);
    // }


    // getUsername(){
    //     return sessionStorage.getItem('username');
    // }
}
