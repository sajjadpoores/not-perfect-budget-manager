import { Injectable } from '@nestjs/common';
import { UserRegisterBodyDto } from './dto/user-register.body.dto';
import { UserEntity } from 'src/Entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) { }

    async register(body: UserRegisterBodyDto) {
        const { name, email, password } = body;
        const user = new UserEntity();
        user.name = name;
        user.email = email;
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;

        await this.userRepository.save(user);
        return user;
    }
}
