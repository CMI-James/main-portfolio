"use client"

import { useRouter } from "next/router"
import { AnimatePresence } from "framer-motion"
import useScrollSection from "@/hooks/useScrollSection"
import { useEffect, useState, useRef } from "react"
import Footer from "./Footer"
import { Toaster } from "sonner"
import dynamic from "next/dynamic"
import LoaderWrapper from "./Loader"

// Dynamically import FloatingActions with SSR disabled
const FloatingActions = dynamic(() => import("../common/FloatingActions"), { ssr: false })

// Dynamically import Navigation with SSR disabled
const Navigation = dynamic(() => import("./Navigation"), { ssr: false })

export default function Layout({ children }) {
  const router = useRouter()
  const section = useScrollSection()
  const [showLoader, setShowLoader] = useState(false)
  const isFirstMount = useRef(true)
  const hasNavigated = useRef(false)

  // Check if we should show the loader on initial mount
  useEffect(() => {
    if (isFirstMount.current) {
      // This is the initial load of any page
      setShowLoader(true)
      isFirstMount.current = false
    }
  }, [])

  // Handle route changes
  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      // Mark that we've started navigating
      hasNavigated.current = true

      // Reset body opacity when route changes
      if (typeof document !== "undefined") {
        document.body.style.opacity = "1"
      }
    }

    const handleRouteChangeComplete = (url) => {
      // If this is client-side navigation (not initial load), don't show loader
      if (hasNavigated.current) {
        setShowLoader(false)
      }
    }

    const handleRouteChangeError = () => {
      // Also handle route change errors
      if (hasNavigated.current) {
        setShowLoader(false)
      }
    }

    router.events.on("routeChangeStart", handleRouteChangeStart)
    router.events.on("routeChangeComplete", handleRouteChangeComplete)
    router.events.on("routeChangeError", handleRouteChangeError)

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart)
      router.events.off("routeChangeComplete", handleRouteChangeComplete)
      router.events.off("routeChangeError", handleRouteChangeError)
    }
  }, [router])

  // Conditionally wrap with loader for any route on initial load/reload
  if (showLoader) {
    return (
      <LoaderWrapper>
        <div className="">
          <AnimatePresence mode="wait">
            <div key={router.pathname}>
              <Navigation />
              {children}
              <Footer />
            </div>
          </AnimatePresence>
          <Toaster position="top-right" />
          <FloatingActions />
        </div>
      </LoaderWrapper>
    )
  }

  // Regular render without loader
  return (
    <div className="">
      <AnimatePresence mode="wait">
        <div key={router.pathname}>
          <Navigation />
          {children}
          <Footer />
        </div>
      </AnimatePresence>
      <Toaster position="top-right" />
      <FloatingActions />
    </div>
  )
}
