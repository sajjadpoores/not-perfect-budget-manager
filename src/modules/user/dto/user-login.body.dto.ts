import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class UserLoginBodyDto {
    @ApiProperty({
        description: 'The email of the user',
        example: 'john_doe@example.com',
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'The password of the user',
        example: 'strongPassword123',
    })
    @IsString()
    password: string;
}