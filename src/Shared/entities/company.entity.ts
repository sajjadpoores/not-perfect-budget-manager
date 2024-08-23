import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ExpenseEntity } from './expense.entity';
import { UserEntity } from './user.entity';

@Entity('company')
export class CompanyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @ManyToMany(() => UserEntity, (user) => user.companies)
  users: UserEntity[];

  @OneToMany(() => ExpenseEntity, (expense) => expense.company)
  expenses: ExpenseEntity[];
}
