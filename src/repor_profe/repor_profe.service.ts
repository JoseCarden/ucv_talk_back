import { Injectable } from '@nestjs/common';
import { CreateReporProfeDto } from './dto/create-repor_profe.dto';
import { UpdateReporProfeDto } from './dto/update-repor_profe.dto';

@Injectable()
export class ReporProfeService {
  create(createReporProfeDto: CreateReporProfeDto) {
    return 'This action adds a new reporProfe';
  }

  findAll() {
    return `This action returns all reporProfe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reporProfe`;
  }

  update(id: number, updateReporProfeDto: UpdateReporProfeDto) {
    return `This action updates a #${id} reporProfe`;
  }

  remove(id: number) {
    return `This action removes a #${id} reporProfe`;
  }
}
