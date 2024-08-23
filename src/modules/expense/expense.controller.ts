import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { AddExpenseDto } from './dto/add-expense-body.dto';
import { UpdateExpenseBodyDto } from './dto/update-expense-body.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';



@Controller('expense')
@ApiTags('Expense')
@ApiSecurity('bearer')
export class ExpenseController {
    constructor(private readonly expenseService: ExpenseService) {}

    @Post()
    async create(@Body() body: AddExpenseDto) {
        return this.expenseService.add(body);
    }

    @Get()
    async findAll() {
        return this.expenseService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.expenseService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateExpenseDto: UpdateExpenseBodyDto) {
        return this.expenseService.update(id, updateExpenseDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.expenseService.remove(id);
    }
}