import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginEstudiante } from './dto/loginEstudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Injectable()
export class EstudianteService {

  constructor(private prisma: PrismaService){}

  async create(createEstudianteDto: CreateEstudianteDto) {
    return await this.prisma.estudiante_register.create({
      data: createEstudianteDto
    });
  }

  async findAll() {
    return await this.prisma.estudiante_register.findMany();
  }

  async findOne(Id_EstudianteRegis: number) {
    return await this.prisma.estudiante_register.findUnique({ where: {Id_EstudianteRegis} });
  }

  async loginEstu(estudianteDTO: LoginEstudiante){
    
    const estudiante = await this.prisma.estudiante_register.findFirst({where: {
      Usuario: estudianteDTO.Usuario,
      Contra: estudianteDTO.Contra
    }});

    if(!estudiante){
      throw new UnauthorizedException('Las credenciales no son validas');
    }
    
    return estudiante;
  }

  async update(id: number, updateEstudianteDto: UpdateEstudianteDto) {

    const estu = await this.prisma.estudiante_register.update({
      where:{
        Id_EstudianteRegis: id,
      },
      data : {
        idUcv_estu: updateEstudianteDto.idUcv_estu,
        Correo: updateEstudianteDto.Correo,
        Usuario: updateEstudianteDto.Usuario,
        Contra: updateEstudianteDto.Contra,
        Genero: updateEstudianteDto.Genero
      }
    })

    if(!estu){
      throw new NotFoundException(`Estudiante de id: ${id} no encontrado`);
    }

    return estu;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} estudiante`;
  // }
}
