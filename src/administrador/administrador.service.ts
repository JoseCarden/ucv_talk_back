import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginAdministrador } from './dto/loginAdministrador.dto';

@Injectable()
export class AdministradorService {

  constructor(private prisma: PrismaService){}

  async create(createAdministradorDto: CreateAdministradorDto) {
    return  await this.prisma.administrador.create({
      data: createAdministradorDto
    });
  }

  async findAll() {
    return await this.prisma.administrador.findMany();
  }

  async findOne(Id_admin: number) {
    return await this.prisma.administrador.findUnique({where: {Id_admin}});
  }

  async loginAdmin(adminDTO: LoginAdministrador){
    
    const admin = await this.prisma.administrador.findFirst({ where: {
      Correo: adminDTO.Correo,
      Usuario: adminDTO.Usuario,
      Contra: adminDTO.Contra
    }});

    if(!admin){
      throw new UnauthorizedException('Las credenciales no son válidas');
    }

    return admin;
  }

  // update(id: number, updateAdministradorDto: UpdateAdministradorDto) {
  //   return `This action updates a #${id} administrador`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} administrador`;
  // }
}
