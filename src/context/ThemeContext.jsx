"use client"
import { createContext, useContext, useEffect, useState } from "react"

// Define the possible theme modes
const THEME_MODES = {
  SYSTEM: "system",
  LIGHT: "light",
  DARK: "dark",
}

// Create the context with default values
const ThemeContext = createContext({
  theme: "light",
  themeMode: THEME_MODES.SYSTEM,
  toggleTheme: () => {},
  setThemeMode: () => {},
  isSystemTheme: true,
})

export const ThemeProvider = ({ children }) => {
  // The actual theme applied (light or dark)
  const [theme, setTheme] = useState("light")

  // The user's selected theme mode (system, light, or dark)
  const [themeMode, setThemeMode] = useState(THEME_MODES.SYSTEM)

  // Function to get system color scheme preference
  const getSystemTheme = () => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    return "light" // Default fallback
  }

  // Initialize theme on first load
  useEffect(() => {
    // Get stored theme mode from localStorage
    const storedThemeMode = localStorage.getItem("themeMode") || THEME_MODES.SYSTEM

    // Set the theme mode
    setThemeMode(storedThemeMode)

    // Set the actual theme based on the theme mode
    if (storedThemeMode === THEME_MODES.SYSTEM) {
      setTheme(getSystemTheme())
    } else {
      setTheme(storedThemeMode) // For light or dark mode
    }
  }, [])

  // Apply theme changes and set up system theme listener
  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle("dark", theme === "dark")

    // Set up listener for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e) => {
      if (themeMode === THEME_MODES.SYSTEM) {
        setTheme(e.matches ? "dark" : "light")
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme, themeMode])

  // Update theme when theme mode changes
  useEffect(() => {
    if (themeMode === THEME_MODES.SYSTEM) {
      setTheme(getSystemTheme())
    } else {
      setTheme(themeMode)
    }

    // Store the theme mode in localStorage
    localStorage.setItem("themeMode", themeMode)
  }, [themeMode])

  // Function to set a specific theme mode
  const setSpecificThemeMode = (mode) => {
    if (Object.values(THEME_MODES).includes(mode)) {
      setThemeMode(mode)
    }
  }

  // Legacy toggle function for backward compatibility
  const toggleTheme = (useSystemTheme = null) => {
    if (useSystemTheme === true) {
      setThemeMode(THEME_MODES.SYSTEM)
    } else if (useSystemTheme === false) {
      // If explicitly turning off system theme, keep current theme
      setThemeMode(theme)
    } else {
      // Toggle between light and dark
      setThemeMode(themeMode === THEME_MODES.LIGHT ? THEME_MODES.DARK : THEME_MODES.LIGHT)
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeMode,
        toggleTheme,
        setThemeMode: setSpecificThemeMode,
        isSystemTheme: themeMode === THEME_MODES.SYSTEM,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
