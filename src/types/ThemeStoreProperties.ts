import { Dispatch } from "react";

export type ThemeMode = "dark" | "light";
export type Action = ChangeTheme;

export interface ThemeStoreProperties {
    store: ThemeStore;
    dispatch: Dispatch<Action>;
}

export interface ThemeStore {
    themeMode: ThemeMode;
}

export interface ChangeTheme {
    type: "changeTheme";
    payload: ThemeMode;
}