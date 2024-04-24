import { IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class SignUpDto {

    @IsString()
    @MinLength(4)
    @MaxLength(25)
    Usuario: string;

    @IsString()
    @MinLength(3)
    @MaxLength(15)
    Contra: string;

}