import { Injectable } from '@nestjs/common';
import { CreateCalificarProfeDto } from './dto/create-calificar_profe.dto';
import { UpdateCalificarProfeDto } from './dto/update-calificar_profe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CalificarProfeService {

  constructor(private prisma: PrismaService){}

  async create(createCalificarProfeDto: CreateCalificarProfeDto) {
    return await this.prisma.califica_profes.create({
      data: createCalificarProfeDto
    });
  }

  async findAll() {
    return await this.prisma.califica_profes.findMany();
  }

  async findOne(Id_Califica: number) {
    return await this.prisma.califica_profes.findUnique({where: {Id_Califica}});
  }

  // update(id: number, updateCalificarProfeDto: UpdateCalificarProfeDto) {
  //   return `This action updates a #${id} calificarProfe`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} calificarProfe`;
  // }
}
