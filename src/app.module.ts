import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ExpenseModule } from './modules/expense/expense.module';


@Module({
  imports: [ExpenseModule, ConfigModule.forRoot({envFilePath:  '.env'})],
  controllers: [],
  providers: [],
})
export class AppModule { }
