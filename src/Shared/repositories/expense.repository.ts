// typeorm expnse entity repository
import { DataSource, Repository } from 'typeorm';
import { ExpenseEntity } from '../entities/expense.entity';
import { GetAllExpensesQueryDto } from 'src/modules/expense/dto/get-all-expenses.query.dto';
import { IUser } from '../interfaces/user.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExpenseRepository extends Repository<ExpenseEntity> {
  constructor(private dataSource: DataSource) {
    super(ExpenseEntity, dataSource.createEntityManager());
  }

  async findAll(user: Pick<IUser, 'id'>, query: GetAllExpensesQueryDto) {
    const qb = this.createQueryBuilder('expense');

    qb.andWhere('expense.userId = :userId', { userId: user.id });
    if (query.title) {
      qb.andWhere('expense.title LIKE :title', { title: `%${query.title}%` });
    }
    if (query.minAmount) {
      qb.andWhere('expense.amount >= :minAmount', {
        minAmount: query.minAmount,
      });
    }
    if (query.maxAmount) {
      qb.andWhere('expense.amount <= :maxAmount', {
        maxAmount: query.maxAmount,
      });
    }
    if (query.startDate) {
      qb.andWhere('expense.date >= :startDate', { startDate: query.startDate });
    }
    if (query.endDate) {
      qb.andWhere('expense.date <= :endDate', { endDate: query.endDate });
    }
    if (query.description) {
      qb.andWhere('expense.description LIKE :description', {
        description: `%${query.description}%`,
      });
    }

    return qb.getMany();
  }
}
