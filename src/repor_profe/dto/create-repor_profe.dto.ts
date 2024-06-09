import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateReporProfeDto {

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

    @IsNumber()
    Id_ProfesRegis: never;

    profes_register: {
        connect: {
            Id_ProfesRegis: number; // Asume que necesitas conectar por el ID del estudiante registrado
        };
    };

}
