"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"

const MotionTypewriter = ({
  text,
  className = "",
  speed = 50,
  delay = 0,
  cursorColor = "currentColor",
  onComplete = () => {},
  cursorBlinkSpeed = 0.8,
  startOnView = false, // New prop to start typing when in view
}) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [hasStarted, setHasStarted] = useState(!startOnView) // Start immediately if not waiting for in-view

  // Reference for intersection observer
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.5 })

  // Letter animation variants
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
      scale: 1.2,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  }

  // Cursor animation variants
  const cursorVariants = {
    blink: {
      opacity: [1, 0, 1],
      transition: {
        duration: cursorBlinkSpeed,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "linear",
      },
    },
  }

  // Start typing when in view (if startOnView is true)
  useEffect(() => {
    if (startOnView && isInView && !hasStarted) {
      setHasStarted(true)
    }
  }, [isInView, startOnView, hasStarted])

  // Type the text letter by letter
  useEffect(() => {
    if (!hasStarted) return // Don't start typing until hasStarted is true

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true)
      onComplete()
    }
  }, [currentIndex, text, speed, isComplete, onComplete, hasStarted])

  // Initial delay before starting to type
  useEffect(() => {
    if (delay > 0 && currentIndex === 0 && hasStarted) {
      const delayTimeout = setTimeout(() => {
        setCurrentIndex(0) // This will trigger the typing to start
      }, delay)

      return () => clearTimeout(delayTimeout)
    }
  }, [delay, currentIndex, hasStarted])

  return (
    <div ref={containerRef} className={`inline-flex flex-wrap ${className}`}>
      <AnimatePresence mode="wait">
        {displayedText.split("").map((char, index) => (
          <motion.span
            key={`${index}-${char}`}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.03 * index }}
            className="inline-block"
            style={{
              display: "inline-block",
              whiteSpace: char === " " ? "pre" : "normal",
            }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>

      {/* Animated cursor */}
      {!isComplete && hasStarted && (
        <motion.span
          variants={cursorVariants}
          animate="blink"
          className="inline-block ml-1"
          style={{ color: cursorColor }}
        >
          |
        </motion.span>
      )}
    </div>
  )
}

export default MotionTypewriter
