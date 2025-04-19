"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, BriefcaseBusiness } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import AnimatedThemeIcon from "./AnimatedThemeIcon"
import { useRouter } from "next/router"

const FloatingActions = ({ scrollToTop, handleMouseDown, handleMouseUp }) => {
  const [activeTooltip, setActiveTooltip] = useState(null)
  const [showScrollButton, setShowScrollButton] = useState(false)
  const router = useRouter()
  const isResumePage = router.pathname === "/resume"

  // Track scroll position to show/hide scroll button
  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 300px or more
      setShowScrollButton(window.scrollY > 300)
    }

    // Set initial state
    handleScroll()

    // Add scroll listener
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Tooltip variants
  const tooltipVariants = {
    hidden: { opacity: 0, x: 20, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1 },
  }

  // Button hover handlers
  const showTooltip = (id) => setActiveTooltip(id)
  const hideTooltip = () => setActiveTooltip(null)

  // Custom scroll to top function
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="fixed bottom-2 right-4 z-[10000]">
      <div className="flex flex-col items-center justify-center gap-2">
        {/* Scroll to top button */}
        <AnimatePresence>
          {showScrollButton && (
            <motion.div
              className="relative"
              onMouseEnter={() => showTooltip("top")}
              onMouseLeave={hideTooltip}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                onClick={handleScrollToTop}
                className="p-2 rounded-full text-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="border-2 p-2 rounded-full border-zinc-500 dark:border-zinc-500">
                  <ArrowUp className="text-2xl text-zinc-500 dark:text-zinc-400" />
                </div>
              </motion.button>

              <AnimatePresence>
                {activeTooltip === "top" && (
                  <motion.div
                    className="absolute right-full top-1/4 -translate-y-1/2 mr-2 bg-zinc-800 dark:bg-zinc-700 text-white px-3 py-1 rounded text-sm whitespace-nowrap"
                    variants={tooltipVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.2 }}
                  >
                    Scroll to top
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Resume button - only show if not on resume page */}
        {!isResumePage && (
          <div className="relative" onMouseEnter={() => showTooltip("resume")} onMouseLeave={hideTooltip}>
            <Link href="/resume">
              <motion.div
                className="p-2 rounded-full text-xl w-fit border-2 text-green-500 border-green-500 transition-colors duration-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <BriefcaseBusiness />
              </motion.div>
            </Link>

            <AnimatePresence>
              {activeTooltip === "resume" && (
                <motion.div
                  className="absolute right-full top-1/4 -translate-y-1/2 mr-2 bg-zinc-800 dark:bg-zinc-700 text-white px-3 py-1 rounded text-sm whitespace-nowrap"
                  variants={tooltipVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.2 }}
                >
                  View resume
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Theme toggle button */}
        <div className="relative" onMouseEnter={() => showTooltip("theme")} onMouseLeave={hideTooltip}>
          <div className="p-2 rounded-full">
            <AnimatedThemeIcon />
          </div>

          <AnimatePresence>
            {activeTooltip === "theme" && (
              <motion.div
                className="absolute right-full top-1/4 -translate-y-1/2 mr-2 bg-zinc-800 dark:bg-zinc-700 text-white px-3 py-1 rounded text-sm whitespace-nowrap"
                variants={tooltipVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.2 }}
              >
                Toggle theme
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default FloatingActions
