import { AXIOS_HASURA_GRAPHQL } from "../infrastructure/axios";

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
