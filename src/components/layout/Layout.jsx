"use client"

import { useRouter } from "next/router"
import { AnimatePresence } from "framer-motion"
import useScrollSection from "@/hooks/useScrollSection"
import Navbar from "./Navbar"
import { useEffect, useState } from "react"
import Footer from "./Footer"
import LoaderWrapper from "./Loader"
import FloatingActions from "../common/FloatingActions"
import Nav from "../navbar/ui/nav"
import { navIsActive } from "./Navbar"

export default function Layout({ children }) {
  const router = useRouter()
  const section = useScrollSection()
  const [isLoading, setIsLoading] = useState(true)
  const [isActive, setIsActive] = useState(false)
  const [themeClass, setThemeClass] = useState("theme-dark-light")
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 6000) // Adjust to match your loading duration
    return () => clearTimeout(timer)
  }, [])

  return (
    <LoaderWrapper>
      <div className="">
        <AnimatePresence mode="wait">
          <div key={router.pathname}>
            <Navbar />
            {children}
            <Footer />
          </div>
        </AnimatePresence>

        {/* Nav component rendered outside the navbar's DOM hierarchy */}
        <AnimatePresence mode="wait">{navIsActive && <Nav currentTheme="theme-light-dark" />}</AnimatePresence>

        <FloatingActions />
      </div>
    </LoaderWrapper>
  )
}
