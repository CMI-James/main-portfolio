"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const FloatingElements = () => {
  const [scrollY, setScrollY] = useState(0)

  // Listen to scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Call once to initialize
    handleScroll()

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Create more visible elements
  const elements = [
    {
      type: "circle",
      color: "bg-pink-500",
      size: 40,
      startPosition: { x: "10%", y: "20%" },
      speed: 0.5,
    },
    {
      type: "circle",
      color: "bg-purple-500",
      size: 60,
      startPosition: { x: "85%", y: "40%" },
      speed: -0.7,
    },
    {
      type: "square",
      color: "bg-blue-500",
      size: 50,
      startPosition: { x: "20%", y: "58%" },
      speed: 0.8,
    },
    {
      type: "square",
      color: "bg-green-500",
      size: 35,
      startPosition: { x: "70%", y: "80%" },
      speed: -0.6,
    },
    {
      type: "star",
      color: "text-yellow-500",
      size: 50,
      startPosition: { x: "30%", y: "10%" },
      speed: 0.9,
    },
    {
      type: "star",
      color: "text-orange-500",
      size: 70,
      startPosition: { x: "60%", y: "70%" },
      speed: -0.5,
    },
  ]

  // Render a star shape using SVG
  const renderStar = (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={color}>
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill="currentColor"
      />
    </svg>
  )

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {elements.map((element, index) => {
        // Calculate position based on scroll
        const yPosition = `calc(${element.startPosition.y} + ${scrollY * element.speed}px)`

        // Determine rotation based on scroll and element index
        const rotation = scrollY * (index % 2 === 0 ? 0.1 : -0.1)

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: element.startPosition.x,
              top: yPosition,
              rotate: rotation,
              opacity: 0.8,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            {element.type === "circle" && (
              <div className={`rounded-full ${element.color}`} style={{ width: element.size, height: element.size }} />
            )}

            {element.type === "square" && (
              <div className={`${element.color}`} style={{ width: element.size, height: element.size }} />
            )}

            {element.type === "star" && renderStar(element.size, element.color)}
          </motion.div>
        )
      })}
    </div>
  )
}

export default FloatingElements

