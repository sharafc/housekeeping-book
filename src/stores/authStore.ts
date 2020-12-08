import { AuthStore, Action } from "../types/AuthStoreProperties";

/**
 * check localstorage if token is already saved, take the value or return false
 */
export const authStore: AuthStore = {
    loggedIn: !!JSON.parse(String(localStorage.getItem("authenticated")).toLowerCase()),
};

/**
 * Is called by dispatch function of useReducer
 * @param store our initial state (store)
 * @param action the action to execute for changing the state
 */
export const reducer = (store: AuthStore, action: Action): AuthStore => {
    switch (action.type) {
        case "loginUser":
            localStorage.setItem("authenticated", "true");
            return {
                ...store,
                loggedIn: action.payload,
            };

        case "logoutUser":
            localStorage.setItem("authenticated", "false");
            return {
                ...store,
                loggedIn: action.payload,
            };

        default:
            return store;
    }
};
