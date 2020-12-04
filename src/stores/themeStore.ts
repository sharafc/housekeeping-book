import { ThemeStore, Action } from "../types/ThemeStoreProperties";

export const themeStore: ThemeStore = {
    themeMode: "dark",
};

/**
 * Is called by dispatch function of useReducer
 * @param store our initial state (store)
 * @param action the action to execute for changing the state
 */
export const reducer = (store: ThemeStore, action: Action): ThemeStore => {
    switch (action.type) {
        case "changeTheme":
            return {
                ...store,
                themeMode: action.payload,
            };

        default:
            return store;
    }
};
