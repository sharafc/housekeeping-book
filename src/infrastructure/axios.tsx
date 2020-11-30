import axios from "axios";

export const AXIOS_HASURA_GRAPHQL = axios.create({
    baseURL: process.env.REACT_APP_PATH_TO_HASURA
});

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

