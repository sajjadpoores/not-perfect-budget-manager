import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { ExpenseEntity } from "./expense.entity";

@Entity('company')
export class CompanyEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    name: string;

    @ManyToMany(() => UserEntity, user => user.companies)
    users: UserEntity[];

    @OneToMany(()=> ExpenseEntity, expense => expense.company)
    expenses: ExpenseEntity[];
}

