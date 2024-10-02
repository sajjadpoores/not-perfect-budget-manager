import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
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
}