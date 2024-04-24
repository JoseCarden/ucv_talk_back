import { IsEmail, IsString, Matches, MaxLength, MinLength, minLength } from 'class-validator';
export class CreateDocenteDto {

    @IsString()
    @MaxLength(25)
    Nombre: string;

    @IsString()
    @MaxLength(25)
    Apell: string;

    @IsString()
    @MaxLength(25)
    Usuario: string;

    @IsString()
    @MaxLength(15)
    Contra: string;

}