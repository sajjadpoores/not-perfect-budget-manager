import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterBodyDto } from './dto/user-register.body.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserLoginBodyDto } from './dto/user-login.body.dto';

@Controller('user')
@ApiTags('User')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('register')
    async register(@Body() body: UserRegisterBodyDto) {
        return this.userService.register(body);
    }

    @Post('login')
    async login(@Body() body: UserLoginBodyDto) {
        return this.userService.login(body);
    }
}
