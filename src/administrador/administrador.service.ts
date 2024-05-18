import { Injectable } from '@nestjs/common';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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

  // findOne(id: number) {
  //   return `This action returns a #${id} administrador`;
  // }

  // update(id: number, updateAdministradorDto: UpdateAdministradorDto) {
  //   return `This action updates a #${id} administrador`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} administrador`;
  // }
}
