import { Injectable } from '@nestjs/common';
import { CreateProfesionalDto } from './dto/create-profesional.dto';
import { UpdateProfesionalDto } from './dto/update-profesional.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginProfesional } from './dto/loginProfesional';

@Injectable()
export class ProfesionalService {

  constructor(private prisma: PrismaService){}

  async create(createProfesionalDto: CreateProfesionalDto) {
    return await this.prisma.profes_register.create({
      data: createProfesionalDto
    });
  }

  async findAll() {
    return await this.prisma.profes_register.findMany();
  }

  async findOne(Id_ProfesRegis: number) {
    return await this.prisma.profes_register.findUnique({where: {Id_ProfesRegis}});
  }

  async loginProfe(profesionalDTO: LoginProfesional){
    const profesional = await this.prisma.profes_register.findFirst({ where: {
      Correo: profesionalDTO.Correo,
      Usuario: profesionalDTO.Usuario,
      Contra: profesionalDTO.Contra
    }})
  }

  // update(id: number, updateProfesionalDto: UpdateProfesionalDto) {
  //   return `This action updates a #${id} profesional`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} profesional`;
  // }
}
