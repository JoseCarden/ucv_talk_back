import { estudiante_register } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength, isString } from 'class-validator';

export class CreateReporEstudianteDto {

    @IsString()
    @MinLength(5)
    @MaxLength(30)
    @IsNotEmpty()
    Asunto: string;

    @IsString()
    @MinLength(5)
    @MaxLength(100)
    @IsNotEmpty()
    Descripcion: string;

    Cap_Evidencia?: Buffer;

    @IsString()
    @MinLength(5)
    @MaxLength(20)
    Anonimo_Revelar?: string;

    @IsNumber()
    @IsNotEmpty()
    Id_Estudiante: number;

    estudiante_register: {
        connect: {
            Id_EstudianteRegis: number; // Asume que necesitas conectar por el ID del estudiante registrado
        };
    };

}
