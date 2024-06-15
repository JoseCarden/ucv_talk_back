import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CalificarProfeService } from './calificar_profe.service';
import { CreateCalificarProfeDto } from './dto/create-calificar_profe.dto';
import { UpdateCalificarProfeDto } from './dto/update-calificar_profe.dto';

@Controller('calificar-profe')
export class CalificarProfeController {
  constructor(private readonly calificarProfeService: CalificarProfeService) {}

  @Post()
  create(@Body() createCalificarProfeDto: CreateCalificarProfeDto) {
    return this.calificarProfeService.create(createCalificarProfeDto);
  }

  @Get()
  findAll() {
    return this.calificarProfeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calificarProfeService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCalificarProfeDto: UpdateCalificarProfeDto) {
  //   return this.calificarProfeService.update(+id, updateCalificarProfeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.calificarProfeService.remove(+id);
  // }
}
