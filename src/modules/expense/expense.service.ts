import { Injectable, NotFoundException } from '@nestjs/common';
import { AddExpenseDto } from './dto/add-expense-body.dto';
import { ExpenseRepository } from 'src/Shared/repositories/expense.repository';
import { ExpenseEntity } from 'src/Shared/entities/expense.entity';
import { IUser } from 'src/Shared/interfaces/user.interface';
import { UserRepository } from 'src/Shared/repositories/user.repository';
import { GetAllExpensesQueryDto } from './dto/get-all-expenses.query.dto';

@Injectable()
export class ExpenseService {
  constructor(
    private readonly expenseRepository: ExpenseRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async add(user: IUser, body: AddExpenseDto) {
    const userEntity = await this.userRepository.findOne({
      where: { id: user.id },
    });
    if (!userEntity) {
      throw new NotFoundException('User not found');
    }

    const expense = new ExpenseEntity();
    expense.title = body.title;
    expense.amount = body.amount;
    expense.description = body.description;
    expense.date = body.date;
    expense.user = userEntity;

    return this.expenseRepository.save(expense);
  }

  async findAll(
    user: IUser,
    query: GetAllExpensesQueryDto,
  ): Promise<ExpenseEntity[]> {
    return this.expenseRepository.findAll(user, query);
  }

  async findOne(id: string) {
    return `This action returns a #${id} expense`;
  }

  async update(id: string) {
    return `This action updates a #${id} expense`;
  }

  async remove(id: string) {
    return `This action removes a #${id} expense`;
  }
}
