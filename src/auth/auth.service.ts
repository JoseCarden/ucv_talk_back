import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { PrismaService } from 'src/prisma/prisma.service';
// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {

  constructor(private prisma: PrismaService){}

  async create(signUpDto: SignUpDto) {
    return await this.prisma.usuario_registrado.create({
      data: signUpDto
    });
  }
  async findAll(){
    return await this.prisma.usuario_registrado.findMany(); 
 }

}
