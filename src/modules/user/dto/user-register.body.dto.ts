import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength } from 'class-validator';

export class UserRegisterBodyDto {
    @ApiProperty({
        description: 'The username of the user',
        example: 'john_doe',
    })
    @IsString()
    username: string;

    @ApiProperty({
        description: 'The password of the user',
        example: 'strongPassword123',
    })
    @IsString()
    @MinLength(6)
    password: string;

    @ApiProperty({
        description: 'The email of the user',
        example: 'john_doe@example.com',
    })
    @IsEmail()
    email: string;
}