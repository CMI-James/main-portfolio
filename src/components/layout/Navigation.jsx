"use client"

import { useEffect, useState, useRef } from "react"
import { AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"
import Navbar from "./Navbar"
import Nav from "../navbar/ui/Hamburger"
import MenuBar from "../navbar/ui/menubar"

const Navigation = () => {
  const [isActive, setIsActive] = useState(false)
  const [isReversed, setIsReversed] = useState(false)
  const [filteredLinks, setFilteredLinks] = useState([])
  const [showContact, setShowContact] = useState(true)
  const [themeClass, setThemeClass] = useState("theme-dark-light")
  const router = useRouter()
  const navbarHeight = useRef(0)

  // Reset menu state on route change
  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [router.pathname])

  // Filter navigation links based on current route
  useEffect(() => {
    const timer = setTimeout(() => {
      const navLinks = [
        { href: "/resume", label: "Resume" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/projects", label: "Projects" },
      ]
      setFilteredLinks(navLinks.filter((link) => link.href !== router.pathname))
      setShowContact(router.pathname !== "/contact")
    }, 100)

    return () => clearTimeout(timer)
  }, [router.pathname])

  // Handle theme changes based on scroll position
  useEffect(() => {
    // Get navbar height once on mount
    const navbar = document.querySelector('[class*="fixed top-0 z-30"]')
    if (navbar) {
      navbarHeight.current = navbar.offsetHeight
    }

    const handleScroll = () => {
      const descriptionElement = document.getElementById("description-section")
      if (!descriptionElement) return

      // Get the position of the description element
      const descriptionRect = descriptionElement.getBoundingClientRect()

      // If the description is touching the navbar, change theme
      if (descriptionRect.top <= navbarHeight.current && descriptionRect.bottom > navbarHeight.current) {
        setThemeClass("theme-light-dark")
      } else {
        setThemeClass("theme-dark-light")
      }
    }

    // Run once on mount to set initial state
    handleScroll()

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Toggle menu function
  const toggleMenu = () => {
    setIsActive(!isActive)
    setIsReversed(!isReversed)
  }

  return (
    <>
      {/* Navbar component */}
      <Navbar themeClass={themeClass} filteredLinks={filteredLinks} showContact={showContact} />

      {/* MenuBar positioned absolutely with highest z-index */}
      <div className="fixed top-2 right-4 z-[100] sm:hidden">
        <div onClick={toggleMenu}>
          <MenuBar currentTheme={themeClass} isActive={isActive} />
        </div>
      </div>

      {/* Nav component with AnimatePresence for animations */}
      <AnimatePresence mode="wait">{isActive && <Nav currentTheme={themeClass} />}</AnimatePresence>
    </>
  )
}

export default Navigation
