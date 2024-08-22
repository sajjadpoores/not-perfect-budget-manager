import { Injectable } from '@nestjs/common';
import { UserRegisterBodyDto } from './dto/user-register.body.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UserLoginBodyDto } from './dto/user-login.body.dto';
import { UserEntity } from 'src/Shared/entities/user.entity';

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

    async login(body: UserLoginBodyDto) {
        const { email, password } = body;
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid email or password');
        }

        return user;
    }
}
