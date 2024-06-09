import { IsOptional, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateDiagnosticoDto {

    @IsString()
    @MinLength(2)
    @MaxLength(20)
    @IsNotEmpty()
    Est_Usuario: string;

    @IsNumber()
    Id_Categoria: never;

    @IsString()
    @MinLength(2)
    @MaxLength(100)
    @IsNotEmpty()
    Diagnostico: string;

    @IsNumber()
    Id_EstudianteRegis: never;

    @IsNumber()
    Id_ProfesRegis: never;

    categoria: {
        connect:{
            Id_Categoria: number;
        }
    }

    estudiante_register: {
        connect: {
            Id_EstudianteRegis: number; // Asume que necesitas conectar por el ID del estudiante registrado
        };
    };

    profes_register: {
        connect: {
            Id_ProfesRegis: number; // Asegúrate de que este sea el tipo correcto según tu modelo
        };
    };

}

