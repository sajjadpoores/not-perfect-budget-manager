import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { ExpenseRepository } from 'src/Shared/repositories/expense.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseEntity } from 'src/Shared/entities/expense.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseEntity, ExpenseRepository])],
  providers: [ExpenseService],
  controllers: [ExpenseController]
})
export class ExpenseModule { }
