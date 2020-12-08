
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



        default:
            return expensesStore;
    }
}
