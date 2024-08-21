import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ExpenseModule } from './modules/expense/expense.module';
import { UserModule } from './modules/user/user.module';


@Module({
  imports: [ExpenseModule, ConfigModule.forRoot({envFilePath:  '.env'}), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
