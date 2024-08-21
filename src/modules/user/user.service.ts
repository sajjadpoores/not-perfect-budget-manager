import { Injectable } from '@nestjs/common';
import { UserRegisterBodyDto } from './dto/user-register.body.dto';

@Injectable()
export class UserService {
    constructor() {}
    async register(body: UserRegisterBodyDto) {
        const { username, email, password } = body;
    }
}
