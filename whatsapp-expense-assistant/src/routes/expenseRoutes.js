import express from 'express';
import ExpenseController from '../controllers/expenseController';

const router = express.Router();
const expenseController = new ExpenseController();

export const setExpenseRoutes = (app) => {
    router.post('/expenses', expenseController.addExpense);
    router.get('/expenses', expenseController.getMonthlyExpenses);
    
    app.use('/api', router);
};