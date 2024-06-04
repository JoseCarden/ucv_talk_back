import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { OnModuleInit } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnModuleInit{

  constructor(private readonly chatService: ChatService) {}

  @WebSocketServer()
  public server: Server;
  
  onModuleInit() {

    //Controla cuando se conecta un cliente (socket)
       this.server.on('connection',(socket: Socket) =>{

        console.log('Bienvenido cliente: ', socket.id);

        socket.on('disconnect',()=>{
          console.log('Hasta luego: ', socket.id);
        })

       });



  }

}
