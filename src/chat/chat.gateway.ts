import { 
  OnGatewayDisconnect,
  SubscribeMessage, 
  WebSocketGateway, 
  WebSocketServer } from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { OnModuleInit } from '@nestjs/common';
import { Server } from 'net';
import { Socket } from 'socket.io';

@WebSocketGateway({cors: '*:*'})
export class ChatGateway implements OnGatewayDisconnect{

  nicks: Map<string, string> = new Map();

  @WebSocketServer()
  server: Server;

  handleDisconnect(client: Socket) { 
    this.server.emit('users-changed', {user: this.nicks[client.id], event: 'left'});
    this.nicks.delete(client.id);
  }

  @SubscribeMessage('set-nickname') 
  ponerNick(client: Socket, nickname: string) {
    this.nicks[client.id] = nickname;
    this.server.emit('users-changed', {user: nickname, event: 'joined'}); 
  }

  @SubscribeMessage('add-message') 
  nuevoMensaje(client: Socket, mensaje) {
    const currentDate = new Date();
    this.server.emit('message', {text: mensaje.text, from: this.nicks[client.id], created: currentDate});
    
  }
}
