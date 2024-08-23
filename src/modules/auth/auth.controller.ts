import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserLoginBodyDto } from './dto/user-login.body.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Public } from 'src/Shared/decorators/is-public.decorator';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({
    summary: 'Login',
    description: 'Login with email and password',
  })
  @Post('login')
  @Public()
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: UserLoginBodyDto) {
    console.log('login');
    return this.authService.login(body);
  }
}
