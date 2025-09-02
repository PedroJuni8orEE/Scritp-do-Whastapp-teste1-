class ExpenseController {
    constructor(expenseService) {
        this.expenseService = expenseService;
    }

    async addExpense(req, res) {
        try {
            const { amount, description } = req.body;
            const expense = await this.expenseService.addExpense(amount, description);
            res.status(201).json(expense);
        } catch (error) {
            res.status(500).json({ message: 'Error adding expense', error });
        }
    }

    async getMonthlyExpenses(req, res) {
        try {
            const month = req.params.month;
            const expenses = await this.expenseService.getMonthlyExpenses(month);
            res.status(200).json(expenses);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving expenses', error });
        }
    }
}

export default ExpenseController;