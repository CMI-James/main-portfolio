"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const AnimatedThemeIcon = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-[36px] h-[36px] rounded-full flex items-center justify-center focus:outline-none ring-2 focus:ring-gray-800 dark:ring-yellow-400/50 dark:focus:ring-yellow-400/70 bg-gray-800 dark:bg-brown-1000 transition-colors duration-700"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 360 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="relative w-6 h-6"
      >
        <motion.div
          initial={false}
          animate={{ opacity: isDark ? 1 : 0 }}
          transition={{ duration: 0.375 }}
          className="absolute inset-0"
        >
          <Sun className="w-6 h-6 text-yellow-400/70" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{ opacity: isDark ? 0 : 1 }}
          transition={{ duration: 0.375 }}
          className="absolute inset-0"
        >
          <Moon className="w-6 h-6 text-beige" />
        </motion.div>
      </motion.div>
    </button>
  );
};

export default AnimatedThemeIcon;
