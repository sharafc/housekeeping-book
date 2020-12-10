import { AXIOS_HASURA_GRAPHQL } from "../infrastructure/axios";
import Expense from "../types/Expense";

export const fetchExpenses = (callback: (expenses: Expense[]) => void): void => {
    let expenses: Expense[] = [];

    const GET_EXPENSES_QUERY = `{
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

    AXIOS_HASURA_GRAPHQL.post("", { query: GET_EXPENSES_QUERY })
        .then((result) => {
            expenses = [...result.data.data.expenses];
            callback(expenses);
        })
        .catch((error) => console.log(error));
};

export const mutateData = (expense: Expense, callback: (expense: Expense) => void): void => {
    const MUTATE = `mutation addTransaction {
        insert_expenses_one(
            object: {amount: "${expense.amount}",
            category: {data: {name: "${expense.category.name}"}},
            created_at: "${expense.created_at}",
            id: "${expense.id}",
            text: "${expense.text}",
            user: {data: {name: "${expense.user.name}"}}})
            {
            amount
            category {
                name
            }
            created_at
            id
            text
            user {
                name
            }
        }
    }`;

    AXIOS_HASURA_GRAPHQL.post("", { query: MUTATE })
        .then((result) => {
            console.log(result);
            // eslint-disable-next-line no-debugger
            debugger;
            callback(expense);
        })
        .catch((error) => console.log(error));
};

export const deleteData = (id: number, callback: (result: string) => void): void => {
    const DELETE = `mutation delete_expense {
            delete_expenses_by_pk(id: "${id}") {
                id
            }
        }`;

    AXIOS_HASURA_GRAPHQL.post("", { query: DELETE })
        .then((result) => {
            callback(result.data);
        })
        .catch((error) => console.log(error));
};
