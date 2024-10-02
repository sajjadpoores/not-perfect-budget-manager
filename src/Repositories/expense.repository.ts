// typeorm expnse entity repository
import { EntityRepository, Repository } from 'typeorm';
import { ExpenseEntity } from '../Entities/expense.entity';

@EntityRepository(ExpenseEntity)
export class ExpenseRepository extends Repository<ExpenseEntity> {
}