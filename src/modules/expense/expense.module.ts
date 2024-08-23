import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { ExpenseRepository } from 'src/Shared/repositories/expense.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseEntity } from 'src/Shared/entities/expense.entity';
import { UserEntity } from 'src/Shared/entities/user.entity';
import { UserRepository } from 'src/Shared/repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseEntity, UserEntity])],
  providers: [ExpenseService, ExpenseRepository, UserRepository],
  controllers: [ExpenseController],
})
export class ExpenseModule {}
