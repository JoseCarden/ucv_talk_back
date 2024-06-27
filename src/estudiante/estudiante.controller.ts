import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { LoginEstudiante } from './dto/loginEstudiante.dto';

@Controller('estudiante')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Get()
  findAll() {
    return this.estudianteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estudianteService.findOne(+id);
  }
  
  @Post('register')
  create(@Body() createEstudianteDto: CreateEstudianteDto) {
    return this.estudianteService.create(createEstudianteDto);
  }

  @Post('login')
  loginEstudiante(@Body() loginEstudiante: LoginEstudiante) {
    return this.estudianteService.loginEstu(loginEstudiante);
  }
  

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEstudianteDto: UpdateEstudianteDto) {
  //   return this.estudianteService.update(+id, updateEstudianteDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.estudianteService.remove(+id);
  // }
}
