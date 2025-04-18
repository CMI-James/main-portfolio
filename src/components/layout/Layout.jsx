"use client"

import { useRouter } from "next/router"
import { AnimatePresence } from "framer-motion"
import useScrollSection from "@/hooks/useScrollSection"
import Navbar from "./Navbar"
import { useEffect, useState } from "react"
import Footer from "./Footer"
import LoaderWrapper from "./Loader"
import FloatingActions from "../common/FloatingActions"

export default function Layout({ children }) {
  const router = useRouter()
  const section = useScrollSection()
  const [isLoading, setIsLoading] = useState(true)

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

        <FloatingActions />
      </div>
    </LoaderWrapper>
  )
}
