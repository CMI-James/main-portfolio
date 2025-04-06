"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { timeOfDayMap, videoMap } from "@/data/time-video-map"

// This component wraps your existing Layout component
export default function LoaderWrapper({ children }) {
  const [timeOfDay, setTimeOfDay] = useState("morning")
  const [count, setCount] = useState(100)
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [videoSrc, setVideoSrc] = useState("")
  const videoRef = useRef(null)

  // Determine time of day based on current hour
  useEffect(() => {
    const hour = new Date().getHours()
    let currentTimeOfDay

    if (hour >= 6 && hour < 12) {
      currentTimeOfDay = "morning"
    } else if (hour >= 12 && hour < 18) {
      currentTimeOfDay = "afternoon"
    } else if (hour >= 18 && hour < 22) {
      currentTimeOfDay = "evening"
    } else {
      currentTimeOfDay = "night"
    }

    setTimeOfDay(currentTimeOfDay)

    // Set video source based on time of day
    const videoUrl = videoMap[currentTimeOfDay] || videoMap.default
    setVideoSrc(videoUrl)
  }, [])

  // Countdown timer
  useEffect(() => {
    if (!isLoading) return

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 0) {
          clearInterval(interval)
          setTimeout(() => {
            setIsLoading(false)
            setTimeout(() => {
              setShowContent(true)
            }, 500)
          }, 500)
          return 0
        }
        return prevCount - 1
      })
    }, 50) // 5000ms / 100 steps = 50ms per step

    return () => clearInterval(interval)
  }, [isLoading])

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50"
            exit={{
              opacity: 0,
              transition: { duration: 0.5 },
            }}
          >
            {/* Video background */}
            <div className="absolute inset-0 w-full h-full">
              {videoSrc && (
                <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted loop playsInline>
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Overlay with your CSS color */}
            <div className="absolute inset-0 bg-brown-1000 dark:bg-beige opacity-70 theme-light-dark transition-colors duration-700"></div>

            {/* Greeting message */}
            <motion.div
              className="absolute top-10 left-10 text-beige dark:text-brown-1000 font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-1">{timeOfDayMap[timeOfDay]?.greeting}</h2>
              <p className="text-xl opacity-80">Welcome to our experience</p>
            </motion.div>

            {/* Simple countdown */}
            <div className="absolute bottom-10 right-10">
              <div
                className="text-beige dark:text-brown-1000 font-bold leading-none"
                style={{
                  fontSize: "clamp(3rem, 20vw, 9rem)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {count}
              </div>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 dark:bg-gray-300">
              <div
                className="h-full bg-beige dark:bg-brown-1000 transition-all duration-50 ease-linear"
                style={{ width: `${count}%` }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render the children (your Layout component) when loading is complete */}
      <AnimatePresence mode="wait">
        {showContent && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

