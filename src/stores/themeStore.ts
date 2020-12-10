import { ThemeStore, Action, ThemeMode } from "../types/ThemeStoreProperties";

export const themeStore: ThemeStore = {
    themeMode: "light",
};

/**
 * Is called by dispatch function of useReducer
 * @param store our initial state (store)
 * @param action the action to execute for changing the state
 */
export const reducer = (store: ThemeStore, action: Action): ThemeStore => {
    switch (action.type) {
        case "changeTheme":
            console.log("changetheme", action.payload)
            localStorage.setItem("themeMode", action.payload);
            return {
                ...store,
                themeMode: action.payload,
            };

        default:
            return store;
    }
};
