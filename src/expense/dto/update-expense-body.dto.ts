export class UpdateExpenseBodyDto {
    readonly title?: string;
    readonly amount?: number;
    readonly date?: Date;
    readonly category?: string;
}