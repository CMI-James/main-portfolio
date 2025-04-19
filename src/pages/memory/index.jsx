"use client"

import Transition from "@/components/common/Transition"
import { useMemory } from "@/context/MemoryContext"
import { useRouter } from "next/router"
import { useRef, useEffect, useState } from "react"
import ImageScroll from "./components/imageScroll"
import MotionTypewriter from "@/components/ui/MotionTypewriter"
import { motion } from "framer-motion"

const Memory = () => {
  const router = useRouter()
  const { name } = useMemory()
  const audioRef = useRef(null)
  const secondSectionRef = useRef(null)
  const [isNavigatingToNothing, setIsNavigatingToNothing] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [welcomeComplete, setWelcomeComplete] = useState(false)
  const [followComplete, setFollowComplete] = useState(false)
  const [isSecondSectionVisible, setIsSecondSectionVisible] = useState(false)

  useEffect(() => {
    // Play background audio
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio playback error:", error)
      })
    }
  }, [])

  useEffect(() => {
    // Redirect if no name is provided
    if (!name && !isNavigatingToNothing) {
      router.replace("/memory/login")
    }
  }, [name, router, isNavigatingToNothing])

  // Set up intersection observer for the second section
  useEffect(() => {
    if (!secondSectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        // If the section is intersecting (visible)
        if (entries[0].isIntersecting) {
          setIsSecondSectionVisible(true)
          // Once we've detected it's visible, we can stop observing
          observer.disconnect()
        }
      },
      {
        // Start animation when at least 20% of the element is visible
        threshold: 0.2,
      },
    )

    observer.observe(secondSectionRef.current)

    return () => {
      if (secondSectionRef.current) {
        observer.unobserve(secondSectionRef.current)
      }
    }
  }, [])

  // Handle welcome text completion
  const handleWelcomeComplete = () => {
    setWelcomeComplete(true)

    // Start scrolling to the next section
    setIsScrolling(true)
    setTimeout(() => {
      // Smooth scrolling over 10 seconds
      const scrollDuration = 10000
      const scrollStart = window.scrollY
      const scrollEnd = document.body.scrollHeight
      const scrollDistance = scrollEnd - scrollStart

      const startTime = performance.now()

      const smoothScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime
        const progress = Math.min(elapsedTime / scrollDuration, 1)
        const newScrollY = scrollStart + scrollDistance * progress

        window.scrollTo(0, newScrollY)

        if (progress < 1) {
          requestAnimationFrame(smoothScroll)
        } else {
          setIsScrolling(false)
        }
      }

      requestAnimationFrame(smoothScroll)
    }, 1000)
  }

  // Handle follow text completion
  const handleFollowComplete = () => {
    setFollowComplete(true)
    console.log(`loop completed.`)

    // Navigate immediately when typing completes
    setIsNavigatingToNothing(true)
    router.push("/nothing")
  }

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="theme-dark-light relative">
      {name && (
        <Transition>
          {/* Section 1 */}
          <motion.div
            className="relative px-5 md:px-10 xl:px-20 2xl:px-28 text-center flex flex-col justify-center items-center h-screen w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <audio ref={audioRef} src="/music/rain.mp3" autoPlay loop />
            <div className="text-heading lg:text-special">
              <MotionTypewriter
                text={`Hey ${name}, Welcome!`}
                speed={80}
                delay={500}
                onComplete={handleWelcomeComplete}
                cursorColor="currentColor"
                className="font-bold"
              />
            </div>
          </motion.div>

          {/* ImageScroll Section */}
          <ImageScroll />

          {/* Section 2 */}
          <motion.div
            ref={secondSectionRef}
            className="relative px-5 md:px-10 xl:px-20 2xl:px-28 text-center flex flex-col justify-center items-center h-screen w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="text-2xl">
              {isSecondSectionVisible ? (
                <MotionTypewriter
                  text="Let's head over to memory, shall we?"
                  speed={60}
                  delay={300}
                  onComplete={handleFollowComplete}
                  cursorColor="currentColor"
                  className="font-medium"
                />
              ) : (
                <span className="opacity-0">Let's head over to memory, shall we?</span>
              )}
            </div>
          </motion.div>
        </Transition>
      )}
    </div>
  )
}

export default Memory
