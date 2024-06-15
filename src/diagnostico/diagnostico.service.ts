import { Injectable } from '@nestjs/common';
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';
import { UpdateDiagnosticoDto } from './dto/update-diagnostico.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DiagnosticoService {

  constructor(private prisma: PrismaService){}

  async create(createDiagnosticoDto: CreateDiagnosticoDto) {
    return await this.prisma.diagnostico_estudiante.create({
      data: createDiagnosticoDto
    });
  }

  async findAll() {
    return await this.prisma.diagnostico_estudiante.findMany();
  }

  async findOne(Id_Diagnotico: number) {
    return await this.prisma.diagnostico_estudiante.findUnique({where: {Id_Diagnotico}});
  }

  // update(id: number, updateDiagnosticoDto: UpdateDiagnosticoDto) {
  //   return `This action updates a #${id} diagnostico`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} diagnostico`;
  // }
}
