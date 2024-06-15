import { Injectable } from '@nestjs/common';
import { CreateReporProfeDto } from './dto/create-repor_profe.dto';
import { UpdateReporProfeDto } from './dto/update-repor_profe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReporProfeService {

  constructor(private prisma: PrismaService){}

  async create(createReporProfeDto: CreateReporProfeDto) {
    return await this.prisma.reporte_profes.create({
      data: createReporProfeDto
    });
  }

  async findAll() {
    return await this.prisma.reporte_profes.findMany();
  }

  async findOne(Id_Reporte: number) {
    return await this.prisma.reporte_profes.findUnique({where: {Id_Reporte}});
  }

  // update(id: number, updateReporProfeDto: UpdateReporProfeDto) {
  //   return `This action updates a #${id} reporProfe`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} reporProfe`;
  // }
}
