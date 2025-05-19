"use client"
import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
  isSystemTheme: true,
})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light") // Default to light
  const [isSystemTheme, setIsSystemTheme] = useState(true)

  // Function to get system color scheme preference
  const getSystemTheme = () => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    return "light" // Default fallback
  }

  useEffect(() => {
    // First check if there's a stored theme preference
    const storedTheme = localStorage.getItem("theme")
    const storedIsSystem = localStorage.getItem("isSystemTheme") === "true"

    if (storedTheme && !storedIsSystem) {
      // User has manually set a theme preference
      setTheme(storedTheme)
      setIsSystemTheme(false)
    } else {
      // Use system preference
      setTheme(getSystemTheme())
      setIsSystemTheme(true)
    }

    // Set up listener for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e) => {
      if (isSystemTheme) {
        setTheme(e.matches ? "dark" : "light")
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, []) // Empty dependency array for initialization

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle("dark", theme === "dark")

    // Store preferences
    localStorage.setItem("theme", theme)
    localStorage.setItem("isSystemTheme", isSystemTheme.toString())
  }, [theme, isSystemTheme])

  // Now let's fix the system theme listener to properly handle manual changes

  // Add this separate effect to handle system theme changes:

  useEffect(() => {
    if (isSystemTheme) {
      setTheme(getSystemTheme())
    }
  }, [isSystemTheme])

  // And update the toggleTheme function to be more explicit:

  const toggleTheme = () => {
    setIsSystemTheme(false) // First set that we're using manual mode
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")) // Then toggle the theme
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme, isSystemTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
