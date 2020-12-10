
import { ExpensesStore, Actions } from "../types/ExpensesStoreProperties";

export const expensesStore: ExpensesStore = {
    expenses: []
};

export function reducer(expensesStore: ExpensesStore, action: Actions): ExpensesStore {
    switch (action.type) {
        case "primeStore":
            return {
                ...expensesStore,
                expenses: [...action.payload],
            };

        case "addItem":
            return {
                ...expensesStore,
                expenses: [...expensesStore.expenses, action.payload],
            };

        case "deleteItem": {
            const expenses = expensesStore.expenses;
            const expense = expenses.find((expense) => expense.id === action.payload);
            let tmpExpenseStore;

            if (expense) {
                const expenseIndex = expenses.indexOf(expense);
                tmpExpenseStore = expenses.filter((expense, index) => {
                    return index !== expenseIndex;
                });
            }

            return {
                ...expensesStore,
                expenses: tmpExpenseStore || expenses,
            };
        }

        default:
            return expensesStore;
    }
}
