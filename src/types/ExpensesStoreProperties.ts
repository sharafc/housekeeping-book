import { Dispatch } from "react";
import Expense from "./Expense";

export type Actions = PrimeStore | AddItem | DeleteItem;

export interface ExpensesStore {
    expenses: Expense[];
}

export interface ExpensesStoreProperties {
    store: ExpensesStore;
    dispatch: Dispatch<Actions>;
}

export interface PrimeStore {
    type: "primeStore";
    payload: Expense[];
}

export interface AddItem {
    type: "addItem";
    payload: Expense;
}

export interface DeleteItem {
    type: "deleteItem";
    payload: number;
}
