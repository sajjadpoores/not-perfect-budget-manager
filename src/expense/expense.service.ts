import { Injectable } from '@nestjs/common';
import { AddExpenseDto } from './dto/add-expense-body.dto';
import { UpdateExpenseBodyDto } from './dto/update-expense-body.dto';

@Injectable()
export class ExpenseService {
    async add(body: AddExpenseDto) {
        return 'This action adds a new expense';
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
