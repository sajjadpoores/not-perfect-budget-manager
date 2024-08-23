import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterBodyDto } from './dto/user-register.body.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/Shared/decorators/is-public.decorator';

@Controller('user')
@ApiTags('User')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('register')
    @Public()
    async register(@Body() body: UserRegisterBodyDto) {
        return this.userService.register(body);
    }
}
