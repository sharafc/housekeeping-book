import axios from "axios";

export const AXIOS_HASURA_GRAPHQL = axios.create({
    baseURL: process.env.REACT_APP_PATH_TO_HASURA
});
