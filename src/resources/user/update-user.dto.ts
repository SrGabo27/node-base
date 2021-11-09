import { property, optional } from "class-converter";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto {
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
}