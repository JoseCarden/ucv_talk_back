import { Injectable } from '@nestjs/common';
import { CreateProfesionalDto } from './dto/create-profesional.dto';
import { UpdateProfesionalDto } from './dto/update-profesional.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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

  // findOne(id: number) {
  //   return `This action returns a #${id} profesional`;
  // }

  // update(id: number, updateProfesionalDto: UpdateProfesionalDto) {
  //   return `This action updates a #${id} profesional`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} profesional`;
  // }
}
