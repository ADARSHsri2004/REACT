import { createContext, useContext } from "react";

//passing values directly
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { }, //method
    lightTheme: () => { } //method
})
export const ThemeProvider = ThemeContext.Provider // .provider

export default function useTheme() {
    return useContext(ThemeContext)
}
