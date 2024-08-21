import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseEntity } from './Entities/expense.entity';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ExpenseModule } from './modules/expense/expense.module';
import { CompanyEntity } from './Entities/company.entity';
import { UserEntity } from './Entities/user.entity';

@Module({
  imports: [ExpenseModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'budget',
    entities: [ExpenseEntity, CompanyEntity, UserEntity],
    synchronize: true,
  }),
    ConfigModule.forRoot({ envFilePath: '.env' }),
    UserModule],
  controllers: [],
  providers: [], 
})
export class AppModule { }
