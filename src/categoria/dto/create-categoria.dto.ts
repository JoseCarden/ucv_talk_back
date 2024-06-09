import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
export class CreateCategoriaDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(50)
    Nombre_Cat: string;

}
