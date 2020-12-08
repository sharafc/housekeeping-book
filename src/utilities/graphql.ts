import { AXIOS_HASURA_GRAPHQL } from "../infrastructure/axios";
import db_data from "../shared/fakedata.json";
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

export const fetchExpenses = (): void => {
    console.log(AXIOS_HASURA_GRAPHQL);
    /*
    AXIOS_HASURA_GRAPHQL.post("", { query: GET_EXPENSES_QUERY })
        .then((result) => console.log(result.data))
        .catch((error) => console.log(error));
    */
};

export const getFakeData = (): Expense[] => {
    const expenses: Expense[] = [...db_data.data.expenses];
    return expenses;
}
