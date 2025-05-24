"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, BriefcaseBusiness, UserRoundPlus, UserRoundMinus, MonitorSmartphone, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { useTheme } from "@/context/ThemeContext"
import { useRouter } from "next/router"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { toast } from "sonner"

// Social links data
const socialLinks = [
  {
    href: "https://github.com/CMI-James",
    icon: <FaGithub />,
    label: "GitHub",
    color: "#333",
  },
  {
    href: "https://www.linkedin.com/in/chibuikem-ilonze-7397a522a/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
    color: "#0077B5",
  },
  {
    href: "https://x.com/cmi_james",
    icon: <FaXTwitter />,
    label: "Twitter",
    color: "#1DA1F2",
  },
]

const FloatingActions = ({ scrollToTop, handleMouseDown, handleMouseUp }) => {
  const [activeTooltip, setActiveTooltip] = useState(null)
  const [showScrollButton, setShowScrollButton] = useState(false)
  const [socialsExpanded, setSocialsExpanded] = useState(false)
  const [themeExpanded, setThemeExpanded] = useState(false)

  // Add mobile detection
  const [isMobile, setIsMobile] = useState(false)
  const [pressTimer, setPressTimer] = useState(null)

  const router = useRouter()
  const isResumePage = router.pathname === "/resume"
  const tooltipTimeoutRef = useRef(null)
  const lastScrollY = useRef(0)
  const scrollThreshold = useRef(0) // Initialize with 0 instead of window.innerHeight

  // Get theme context
  const { theme, themeMode, setThemeMode, isSystemTheme } = useTheme()

  // Initialize scrollThreshold after component mounts
  useEffect(() => {
    // Now we're safely on the client side
    scrollThreshold.current = window.innerHeight * 0.03 // 10vh
  }, [])

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Track scroll position to show/hide scroll button and close expanded menus on scroll
  useEffect(() => {
    // Skip if we're not in the browser
    if (typeof window === "undefined") return

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show button when scrolled down 300px or more
      setShowScrollButton(currentScrollY > 300)

      // Only close expanded menus if we've scrolled more than the threshold (10vh)
      const scrollDifference = Math.abs(currentScrollY - lastScrollY.current)
      if (scrollDifference > scrollThreshold.current) {
        if (socialsExpanded) {
          setSocialsExpanded(false)
        }
        if (themeExpanded) {
          setThemeExpanded(false)
        }
      }

      // Update last scroll position
      lastScrollY.current = currentScrollY
    }

    // Set initial scroll position
    lastScrollY.current = window.scrollY

    // Update threshold on window resize
    const handleResize = () => {
      scrollThreshold.current = window.innerHeight * 0.1 // 10vh
    }

    // Set initial state
    handleScroll()

    // Add event listeners
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [socialsExpanded, themeExpanded])

  // Tooltip variants
  const tooltipVariants = {
    hidden: { opacity: 0, x: 20, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1 },
  }

  // Mobile-aware tooltip handlers
  const showTooltip = (id) => {
    if (isMobile) return // Don't show on hover for mobile

    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current)
    }
    setActiveTooltip(id)
  }

  const hideTooltip = () => {
    if (isMobile) return // Don't hide on hover leave for mobile

    tooltipTimeoutRef.current = setTimeout(() => {
      setActiveTooltip(null)
    }, 100)
  }

  // Press and hold handlers for mobile
  const handlePressStart = (id) => {
    if (!isMobile) return

    const timer = setTimeout(() => {
      setActiveTooltip(id)
    }, 500) // Show tooltip after 500ms press

    setPressTimer(timer)
  }

  const handlePressEnd = () => {
    if (!isMobile) return

    if (pressTimer) {
      clearTimeout(pressTimer)
      setPressTimer(null)
    }

    // Hide tooltip after a delay
    setTimeout(() => {
      setActiveTooltip(null)
    }, 2000)
  }

  // Toggle social icons
  const toggleSocials = () => {
    setSocialsExpanded(!socialsExpanded)
    if (themeExpanded) setThemeExpanded(false)
  }

  // Toggle theme options
  const toggleThemeOptions = () => {
    setThemeExpanded(!themeExpanded)
    if (socialsExpanded) setSocialsExpanded(false)
  }

  // Set specific theme
  const setSpecificTheme = (newTheme) => {
    // If current theme is already the selected one, do nothing
    if (newTheme === themeMode) {
      setThemeExpanded(false)
      return
    }

    // Set the new theme mode
    setThemeMode(newTheme)

    // Show toast notification
    if (newTheme === "system") {
      toast.success("System theme preference applied")
    } else if (newTheme === "light") {
      toast.success("Light theme applied")
    } else if (newTheme === "dark") {
      toast.success("Dark theme applied")
    }

    // Close theme options
    setThemeExpanded(false)
  }

  // Custom scroll to top function
  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  // Get current theme icon and border color
  const getThemeStyles = () => {
    if (themeMode === "system") {
      return {
        icon: <MonitorSmartphone className="text-purple-500" />,
        borderColor: "border-purple-500 theme-dark-light",
      }
    } else if (themeMode === "light") {
      return {
        icon: <Sun className="text-yellow-500" />,
        borderColor: "border-yellow-500 theme-dark-light",
      }
    } else {
      return {
        icon: <Moon className="text-blue-500" />,
        borderColor: "border-blue-500 theme-dark-light",
      }
    }
  }

  // Replace the getCurrentThemeIcon function with this more comprehensive function
  const themeStyles = getThemeStyles()

  // Get available theme options (excluding current theme)
  const getAvailableThemeOptions = () => {
    const allThemes = [
      {
        mode: "system",
        icon: <MonitorSmartphone className="text-purple-500" />,
        color: "border-purple-500",
        label: "System theme",
      },
      { mode: "light", icon: <Sun className="text-yellow-500" />, color: "border-yellow-500", label: "Light theme" },
      { mode: "dark", icon: <Moon className="text-blue-500" />, color: "border-blue-500", label: "Dark theme" },
    ]

    return allThemes.filter((theme) => theme.mode !== themeMode)
  }

  return (
    <div className="fixed bottom-2 right-0 z-20">
      <div className="flex flex-col items-center justify-center gap-2">
        {/* Scroll to top button */}
        <AnimatePresence>
          {showScrollButton && (
            <motion.div
              className="relative"
              onMouseEnter={() => showTooltip("top")}
              onMouseLeave={hideTooltip}
              onTouchStart={() => handlePressStart("top")}
              onTouchEnd={handlePressEnd}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                onClick={handleScrollToTop}
                className="rounded-full text-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="border-2 p-2 rounded-full border-zinc-500 theme-dark-light">
                  <ArrowUp className="text-zinc-500" />
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
          <div
            className="relative"
            onMouseEnter={() => showTooltip("resume")}
            onMouseLeave={hideTooltip}
            onTouchStart={() => handlePressStart("resume")}
            onTouchEnd={handlePressEnd}
          >
            <Link href="/resume">
              <motion.div
                className="p-2 rounded-full text-xl w-fit border-2 text-green-500 border-green-500 transition-colors duration-500 theme-dark-light"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <BriefcaseBusiness className="text-green-500" />
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

        {/* Theme toggle button with expandable options */}
        <div className="relative">
          <div
            className="relative"
            onMouseEnter={() => showTooltip("theme")}
            onMouseLeave={hideTooltip}
            onTouchStart={() => handlePressStart("theme")}
            onTouchEnd={handlePressEnd}
          >
            <motion.button
              onClick={toggleThemeOptions}
              className="rounded-full text-xl relative z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`border-2 p-2 rounded-full ${themeStyles.borderColor}`}>{themeStyles.icon}</div>
            </motion.button>

            {/* Only show tooltip when theme options are NOT expanded */}
            <AnimatePresence>
              {activeTooltip === "theme" && !themeExpanded && (
                <motion.div
                  className="absolute right-full top-1/4 -translate-y-1/2 mr-2 bg-zinc-800 dark:bg-zinc-700 text-white px-3 py-1 rounded text-sm whitespace-nowrap"
                  variants={tooltipVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.2 }}
                >
                  {themeMode === "system" ? "System theme" : themeMode === "light" ? "Light theme" : "Dark theme"}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Options - Horizontal Layout */}
          <AnimatePresence>
            {themeExpanded && (
              <>
                {getAvailableThemeOptions().map((themeOption, index) => (
                  <motion.div
                    key={themeOption.mode}
                    className="absolute top-0 -translate-y-1/2"
                    style={{ right: 0 }}
                    initial={{ opacity: 0, x: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      x: -60 * (index + 1),
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: index * 0.1,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      x: 0,
                      scale: 0,
                      transition: {
                        duration: 0.2,
                        delay: (getAvailableThemeOptions().length - 1 - index) * 0.05,
                      },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <button
                      onClick={() => setSpecificTheme(themeOption.mode)}
                      className={`border-2 p-2 rounded-full flex items-center justify-center text-xl ${themeOption.color} theme-dark-light`}
                      aria-label={themeOption.label}
                    >
                      {themeOption.icon}
                    </button>
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Social Icons Section */}
        <div className="relative">
          {/* Social Icons Toggle Button */}
          <div
            className="relative"
            onMouseEnter={() => showTooltip("socials")}
            onMouseLeave={hideTooltip}
            onTouchStart={() => handlePressStart("socials")}
            onTouchEnd={handlePressEnd}
          >
            <motion.button
              onClick={toggleSocials}
              className="rounded-full text-xl relative z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="border-2 p-2 rounded-full border-blue-500 theme-dark-light">
                {socialsExpanded ? (
                  <UserRoundMinus className="text-blue-500" />
                ) : (
                  <UserRoundPlus className="text-blue-500" />
                )}
              </div>
            </motion.button>

            {/* Only show tooltip when social icons are NOT expanded */}
            <AnimatePresence>
              {activeTooltip === "socials" && !socialsExpanded && (
                <motion.div
                  className="absolute right-full top-1/4 -translate-y-1/2 mr-2 bg-zinc-800 dark:bg-zinc-700 text-white px-3 py-1 rounded text-sm whitespace-nowrap"
                  variants={tooltipVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.2 }}
                >
                  Social Links
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Social Icons - Horizontal Layout on Same Line */}
          <AnimatePresence>
            {socialsExpanded && (
              <>
                {socialLinks.map((social, i) => (
                  <motion.div
                    key={social.label}
                    className="absolute top-1 -translate-y-1/2"
                    style={{ right: 0 }}
                    initial={{ opacity: 0, x: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      x: -60 * (i + 1),
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: i * 0.1,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      x: 0,
                      scale: 0,
                      transition: {
                        duration: 0.2,
                        delay: (socialLinks.length - 1 - i) * 0.05,
                      },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="border-2 p-2 rounded-full flex items-center justify-center text-xl theme-dark-light"
                      style={{
                        borderColor: social.color,
                        color: social.color,
                      }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default FloatingActions
