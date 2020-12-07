import { Dispatch } from "react";

export type Action = LoginUser | LogoutUser;

export interface AuthStoreProperties {
    store: AuthStore;
    dispatch: Dispatch<Action>;
}

export interface AuthStore {
    loggedIn: boolean;
}

export interface LoginUser {
    type: "loginUser";
    payload: boolean;
}

export interface LogoutUser {
    type: "logoutUser";
    payload: boolean;
}
