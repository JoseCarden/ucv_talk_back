import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriaService {

  constructor(private prisma: PrismaService){}

  async create(createCategoriaDto: CreateCategoriaDto) {
    return await this.prisma.categoria.create({
      data: createCategoriaDto
    });
  }

  async findAll() {
    return await this.prisma.categoria.findMany();
  }

  async findOne(Id_Categoria: number) {
    return await this.prisma.categoria.findUnique({where: {Id_Categoria}});
  }

  // update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
  //   return `This action updates a #${id} categoria`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} categoria`;
  // }
}
