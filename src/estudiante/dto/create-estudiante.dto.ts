import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength, isString } from 'class-validator';

export class CreateEstudianteDto {

    @MinLength(5)
    @MaxLength(30)
    @IsEmail()
    Correo: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @IsNotEmpty()
    Usuario: string;

    @IsString()
    @MinLength(4)
    @MaxLength(15)
    @IsNotEmpty()
    Contra: string;

    @IsNumber()
    Genero: number;

}
