import { AXIOS_HASURA_GRAPHQL } from "../infrastructure/Axios";
import db_data from "../shared/fakedata.json";
import Expense from "../types/Expense";


export const GET_EXPENSES_QUERY = `{
    expenses {
        id
        text
        user {
            name
        }
        category {
            name
        }
        amount
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