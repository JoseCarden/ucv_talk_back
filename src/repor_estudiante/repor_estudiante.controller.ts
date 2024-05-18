import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReporEstudianteService } from './repor_estudiante.service';
import { CreateReporEstudianteDto } from './dto/create-repor_estudiante.dto';
import { UpdateReporEstudianteDto } from './dto/update-repor_estudiante.dto';

@Controller('repor-estudiante')
export class ReporEstudianteController {
  constructor(private readonly reporEstudianteService: ReporEstudianteService) {}

  @Post('nuevo_reporte')
  create(@Body() createReporEstudianteDto: CreateReporEstudianteDto) {
    return this.reporEstudianteService.create(createReporEstudianteDto);
  }

  @Get()
  findAll() {
    return this.reporEstudianteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reporEstudianteService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateReporEstudianteDto: UpdateReporEstudianteDto) {
  //   return this.reporEstudianteService.update(+id, updateReporEstudianteDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.reporEstudianteService.remove(+id);
  // }
}
