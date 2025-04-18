"use client"

import { useTheme } from "@/context/ThemeContext"

const MyComponent = () => {
  const { theme, toggleTheme, isSystemTheme } = useTheme()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-beige text-brown-1000 dark:bg-brown-1000 dark:text-beige transition-colors duration-300">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 mt-4 bg-brown-1000 text-beige dark:bg-beige dark:text-brown-1000 border border-transparent rounded-lg hover:border-brown-1000 hover:bg-beige hover:text-brown-1000 dark:hover:border-beige dark:hover:bg-brown-1000 dark:hover:text-beige transition-all"
      >
        Toggle Theme
      </button>
      <p className="mt-4">Current mode: {theme}</p>
      <p className="mt-2">{isSystemTheme ? "Using system preference" : "Using manual selection"}</p>
      <p className="mt-4 max-w-md text-center text-sm opacity-70">
        Note: Your manual theme selection will be preserved until you reload the page, at which point it will revert to
        your system preference.
      </p>
    </div>
  )
}

export default MyComponent
