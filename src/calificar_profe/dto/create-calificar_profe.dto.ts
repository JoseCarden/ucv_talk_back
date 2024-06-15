import { estudiante_register } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateCalificarProfeDto {

    @IsNumber()
    @IsNotEmpty()
    Id_EstudianteRegis: never;

    estudiante_register: {
        connect: {
            Id_EstudianteRegis: number; // Asegúrate de que este sea el tipo correcto según tu modelo
        };
    };

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    Id_ProfesRegis: never;

    profes_register: {
        connect: {
            Id_ProfesRegis: number; // Asegúrate de que este sea el tipo correcto según tu modelo
        };
    };

    @IsNumber()
    @IsNotEmpty()
    Calificacion: number;

}

