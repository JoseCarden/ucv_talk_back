import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { LoginAdministrador } from './dto/loginAdministrador.dto';

@Controller('administrador')
export class AdministradorController {
  
  constructor(private readonly administradorService: AdministradorService) {}

  @Get()
  findAll() {
    return this.administradorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.administradorService.findOne(+id);
  }

  @Post('register')
  create(@Body() createAdministradorDto: CreateAdministradorDto) {
    return this.administradorService.create(createAdministradorDto);
  }

  @Post('login')
  loginAdmin(@Body() loginAdmin: LoginAdministrador){
    return this.administradorService.loginAdmin(loginAdmin);
  }


  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAdministradorDto: UpdateAdministradorDto) {
  //   return this.administradorService.update(+id, updateAdministradorDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.administradorService.remove(+id);
  // }
}
