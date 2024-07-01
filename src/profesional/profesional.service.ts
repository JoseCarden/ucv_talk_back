import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateProfesionalDto } from './dto/create-profesional.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginProfesional } from './dto/loginProfesional';
import { UpdateProfesionalDto } from './dto/update-profesional.dto';

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

  async findOne(Id_ProfesRegis: number) {
    return await this.prisma.profes_register.findUnique({where: {Id_ProfesRegis}});
  }

  async loginProfe(profesionalDTO: LoginProfesional){
    const profesional = await this.prisma.profes_register.findFirst({ where: {
      Usuario: profesionalDTO.Usuario,
      Contra: profesionalDTO.Contra
    }});

    if(!profesional){
      throw new UnauthorizedException('Las credenciales no son válidas');
    }

    return profesional;
  }

  async update(id: number, updateProfesionalDto: UpdateProfesionalDto) {

    const pro = await this.prisma.profes_register.update({
      where: {
        Id_ProfesRegis: id,
      },
      data: {
        Nombre: updateProfesionalDto.Nombre,
        Apellido: updateProfesionalDto.Apellido,
        Correo: updateProfesionalDto.Correo,
        Especialidad: updateProfesionalDto.Especialidad,
        Usuario: updateProfesionalDto.Usuario,
        Contra: updateProfesionalDto.Contra
      }
    })

    if(!pro){
      throw new NotFoundException(`Profesional de id: ${id} no encontrado`);
    }

    return pro;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} profesional`;
  // }
}
