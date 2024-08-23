import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { AddExpenseDto } from './dto/add-expense-body.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { User } from 'src/Shared/decorators/user.decorator';
import { IUser } from 'src/Shared/interfaces/user.interface';

@Controller('expense')
@ApiTags('Expense')
@ApiSecurity('bearer')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  async create(@Body() body: AddExpenseDto, @User() user: IUser) {
    return this.expenseService.add(user, body);
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
  async update(@Param('id') id: string) {
    return this.expenseService.update(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.expenseService.remove(id);
  }
}
