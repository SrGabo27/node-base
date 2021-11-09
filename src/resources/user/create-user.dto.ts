import { optional, property } from 'class-converter';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    @property()
    @optional()
    @IsNotEmpty()
    @IsString()
    name!: string;

    @property()
    @optional()
    @IsNotEmpty()
    @IsString()
    lastname!: string;
    
    @property()
    @optional()
    @IsNotEmpty()
    @IsEmail()
    email!: string;

    @property()
    @optional()
    @IsNotEmpty()
    @IsString()
    password!: string;
}