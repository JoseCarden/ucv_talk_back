import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EstudianteService {

  constructor(private prisma: PrismaService){}

  async create(createEstudianteDto: CreateEstudianteDto) {
    return await this.prisma.estudiante_register.create({
      data: createEstudianteDto
    });
  }

  async findAll() {
    return await this.prisma.estudiante_register.findMany();
  }

  async findOne(Id_EstudianteRegis: number) {
    return await this.prisma.estudiante_register.findUnique({ where: {Id_EstudianteRegis} });
  }

  // update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
  //   return `This action updates a #${id} estudiante`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} estudiante`;
  // }
}
