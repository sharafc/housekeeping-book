import { AXIOS_HASURA_GRAPHQL } from "../infrastructure/axios";
import Expense from "../types/Expense";

export const GET_EXPENSES_QUERY = `{
    expenses {
        id
        amount
        category {
            name
        }
        created_at
        user {
            name
        }
        text
    }
}`;

export const MUTATE = ``

export const fetchExpenses = (callback: (expenses: Expense[]) => void): void => {
    let expenses: Expense[] = [];

    AXIOS_HASURA_GRAPHQL.post("", { query: GET_EXPENSES_QUERY })
        .then((result) => {
            expenses = [...result.data.data.expenses]
            callback(expenses)
        })
        .catch((error) => console.log(error));
};

export const mutateData = (expense: Expense, callback: (expense: Expense) => void): void => {
    AXIOS_HASURA_GRAPHQL.post("", { query: MUTATE })
        .then((result) => {
            result.data === "OK"

            callback(expense);
        })
        .catch((error) => console.log(error));
}
