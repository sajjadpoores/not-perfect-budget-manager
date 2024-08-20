import { Module } from '@nestjs/common';
import { ExpenseModule } from './expense/expense.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ExpenseModule, ConfigModule.forRoot({envFilePath:  '.env'})],
  controllers: [],
  providers: [],
})
export class AppModule { }
