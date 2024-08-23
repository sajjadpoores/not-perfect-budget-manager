import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { AddExpenseDto } from './dto/add-expense-body.dto';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { User } from 'src/Shared/decorators/user.decorator';
import { IUser } from 'src/Shared/interfaces/user.interface';
import { GetAllExpensesQueryDto } from './dto/get-all-expenses.query.dto';

@Controller('expense')
@ApiTags('Expense')
@ApiSecurity('bearer')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  @ApiOperation({ summary: 'Add Expense', description: 'Add a new expense' })
  async create(@Body() body: AddExpenseDto, @User() user: IUser) {
    return this.expenseService.add(user, body);
  }

  @Get()
  @ApiOperation({
    summary: 'Get All Expenses',
    description: 'Get all expenses',
  })
  async findAll(@Query() query: GetAllExpensesQueryDto, @User() user: IUser) {
    return this.expenseService.findAll(user, query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.expenseService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string) {
    return this.expenseService.update(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.expenseService.remove(id);
  }
}
