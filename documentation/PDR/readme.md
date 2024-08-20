# NOT PERFECT BUDGET MANAGEMENT

## Introduction
Hello everyone, this is a documentation where I want to write about fundamental definitions and concepts. This is the very first documentation I've written for this project (ERD is the first one actually). I will try to explain the concepts and definitions in a simple way. I hope you will understand the concepts and definitions easily. Let's start.

## Main Entities
There are three main entities in this project:
1. **User**: An individual who earns money (income) and spends it (expenses).
2. **Company**: A group made up of one or more users. Companies can receive investments from their members and spend money on various expenses.
3. **Budget**: The available money a user or company has to manage.

## What is Budget?
Budget can be defined for `User` and `Company` and it is as bellow:

### 1. User Budget
Budget is the amount of money that user can spend.

#### How is it calculated?
The budget is calculated by the following formula:
```
Budget = sum(profit) + sum(income) - sum(expense)
```
where:
- **profit**: is the money that user gained from the companies that he/she invested.
- **income**: is the money that user has as income, it can be from any source.
- **expense**: is the money that user spent on the expenses.


### 2. Company Budget
Is the amount of money that company can spend.

#### How is it calculated?
The budget is calculated by the following formula:
```
companyBudget = sum(companyExpense)
```
where:
- **groupExpense**: is the money that company spent on the expenses.

### Profit
The profit is defined for each user in a company and it is calculated by the following formula:
```
Profit[i] = (sum(investment[i]) - companyBudget)/n
```
where:
- **sum(investment)**: is the money that users have invested in the company all together.
- **companyBudget**: is the sum of all company expenses.
- **n**: can be different things, it can be the number of users in the company or it can be calulated by the following formula:
```
n = sum(UserInvestment) / sum(CompanyInvestment)
```
or people may decide on what `n` should be for each member. In that case `n` is calculated as:
```
n = [n1, n2, n3, ..., nm]
n1 + n2 + ... + nm = 1
```
where:
- **m**: is number of company members.

By adjusting `n`, members can decide how profits should be divided.
