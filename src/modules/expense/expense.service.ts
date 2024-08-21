import { Injectable } from '@nestjs/common';
import { AddExpenseDto } from './dto/add-expense-body.dto';
import { UpdateExpenseBodyDto } from './dto/update-expense-body.dto';
import { ExpenseRepository } from 'src/Repositories/expense.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ExpenseEntity } from 'src/Entities/expense.entity';

@Injectable()
export class ExpenseService {
    constructor(
        @InjectRepository(ExpenseEntity)
        private readonly expenseRepository: ExpenseRepository) { }

    async add(body: AddExpenseDto) {
        await this.expenseRepository.save(body);
        return await this.expenseRepository.find();
    }

    async findAll() {
        return `This action returns all expense`;
    }

    async findOne(id: string) {
        return `This action returns a #${id} expense`;
    }

    async update(id: string, body: UpdateExpenseBodyDto) {
        return `This action updates a #${id} expense`;
    }

    async remove(id: string) {
        return `This action removes a #${id} expense`;
    }
}
