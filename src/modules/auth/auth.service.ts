import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserLoginBodyDto } from './dto/user-login.body.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/Shared/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
        private jwtService: JwtService) { }

    async login(body: UserLoginBodyDto): Promise<{ access_token: string }> {
        const { email, password } = body;
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new UnauthorizedException('Invalid email or password');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            const payload = { email: user.email, id: user.id }
            return {
                access_token: await this.jwtService.signAsync(payload)
            }
        }

        return null;
    }


}
