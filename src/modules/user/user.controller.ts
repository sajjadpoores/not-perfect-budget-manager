import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterBodyDto } from './dto/user-register.body.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('register')
    async register(@Body() body: UserRegisterBodyDto) {
        return this.userService.register(body);
    }

}
