import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseEntity } from './Shared/entities/expense.entity';
import { UserModule } from './modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExpenseModule } from './modules/expense/expense.module';
import { CompanyEntity } from './Shared/entities/company.entity';
import { UserEntity } from './Shared/entities/user.entity';

@Module({
  imports: [ExpenseModule, TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get<string>('DB_HOST'),
      port: configService.get<number>('DB_PORT'),
      username: configService.get<string>('DB_USERNAME'),
      password: configService.get<string>('DB_PASSWORD'),
      database: configService.get<string>('DB_DATABASE'),
      entities: [ExpenseEntity, CompanyEntity, UserEntity],
      synchronize: true,
    }),
  }),
    ConfigModule.forRoot({ envFilePath: '.env' }),
    UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
