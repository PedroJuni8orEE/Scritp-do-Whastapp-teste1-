export function calculateTotalExpenses(expenses) {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

export function calculateAverageExpense(expenses) {
    if (expenses.length === 0) return 0;
    const total = calculateTotalExpenses(expenses);
    return total / expenses.length;
}