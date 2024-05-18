import { Injectable } from '@nestjs/common';
import { CreateReporEstudianteDto } from './dto/create-repor_estudiante.dto';
import { UpdateReporEstudianteDto } from './dto/update-repor_estudiante.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReporEstudianteService {

  constructor(private prisma: PrismaService){}

  async create(createReporEstudianteDto: CreateReporEstudianteDto) {
    return await this.prisma.reporte_estudiante.create({
      data: createReporEstudianteDto
    });
  }

  async findAll() {
    return  await this.prisma.reporte_estudiante.findMany();
  }

  async findOne(Id_Reporte: number) {
    return await this.prisma.reporte_estudiante.findUnique({where: {Id_Reporte}});
  }

  // update(id: number, updateReporEstudianteDto: UpdateReporEstudianteDto) {
  //   return `This action updates a #${id} reporEstudiante`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} reporEstudiante`;
  // }
}
