import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength, isString } from 'class-validator';

export class CreateProfesionalDto {

    @IsString()
    @MinLength(4)
    @MaxLength(40)
    @IsNotEmpty()
    Nombre: string;

    @IsString()
    @MinLength(4)
    @MaxLength(40)
    @IsNotEmpty()
    Apellido: string;

    @IsString()
    @MinLength(4)
    @MaxLength(30)
    @IsNotEmpty()
    @IsEmail()
    Correo: string;

    @IsString()
    @MinLength(4)
    @MaxLength(300)
    @IsNotEmpty()
    Especialidad: string;

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

}
