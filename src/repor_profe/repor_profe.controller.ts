import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReporProfeService } from './repor_profe.service';
import { CreateReporProfeDto } from './dto/create-repor_profe.dto';
import { UpdateReporProfeDto } from './dto/update-repor_profe.dto';

@Controller('repor-profe')
export class ReporProfeController {
  constructor(private readonly reporProfeService: ReporProfeService) {}

  @Post('nuevo_reporte')
  create(@Body() createReporProfeDto: CreateReporProfeDto) {
    return this.reporProfeService.create(createReporProfeDto);
  }

  @Get()
  findAll() {
    return this.reporProfeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reporProfeService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateReporProfeDto: UpdateReporProfeDto) {
  //   return this.reporProfeService.update(+id, updateReporProfeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.reporProfeService.remove(+id);
  // }
}
