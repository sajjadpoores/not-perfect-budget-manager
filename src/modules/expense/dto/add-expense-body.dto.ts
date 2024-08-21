import { ApiProperty } from "@nestjs/swagger";

export class AddExpenseDto {
    @ApiProperty({ description: 'Title of the expense', example: 'Groceries' })
    readonly title: string;

    @ApiProperty({ description: 'Amount of the expense', example: 50 })
    readonly amount: number;

    @ApiProperty({ description: 'Date of the expense', example: '2023-10-01' })
    readonly date: Date;

    @ApiProperty({ description: 'Description of the expense', example: 'Weekly grocery shopping' })
    readonly description: string;
}