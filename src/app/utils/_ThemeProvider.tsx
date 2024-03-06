"use client"
import { createContext, useEffect, useState } from "react"

type themeVariant = "dark" | "light" | undefined

type ThemeContextType = [themeVariant, React.Dispatch<React.SetStateAction<themeVariant>>]

// Provide a default value that matches ThemeContextType
export const Theme = createContext<ThemeContextType>(["light", () => { }]);

function ThemeProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const browserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme(browserTheme ? "dark" : "light")
    }, [])

    const [theme, setTheme] = useState<themeVariant>()

    return (
        <Theme.Provider value={[theme, setTheme]}>
            {children}
        </Theme.Provider>
    )
}

export default ThemeProvider