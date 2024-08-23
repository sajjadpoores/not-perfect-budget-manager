import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CompanyEntity } from './company.entity';
import { UserEntity } from './user.entity';

@Entity('expense')
export class ExpenseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  amount: number;

  @Column({ type: 'date', nullable: false })
  date: Date;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(() => CompanyEntity, (company) => company.expenses)
  company: CompanyEntity;

  @OneToMany(() => UserEntity, (user) => user.expenses)
  user: UserEntity;
}
