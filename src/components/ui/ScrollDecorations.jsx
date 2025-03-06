"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll } from "framer-motion"

const ScrollDecorations = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const { scrollY } = useScroll()

  // useRef to store generated positions
  const circlesRef = useRef([])
  const squaresRef = useRef([])
  const trianglesRef = useRef([])

  const [y1, setY1] = useState(0)
  const [y2, setY2] = useState(0)
  const [y3, setY3] = useState(0)
  const [rotate1, setRotate1] = useState(0)
  const [rotate2, setRotate2] = useState(0)
  const [scale1, setScale1] = useState(1)
  const [scale2, setScale2] = useState(1)
  const [opacity, setOpacity] = useState(0.2)

  useEffect(() => {
    const updateValues = () => {
      setY1(scrollY.get() / 5)
      setY2(-(scrollY.get() / 3.33))
      setY3(scrollY.get() / 6.66)
      setRotate1(scrollY.get() / 5.55)
      setRotate2(scrollY.get() / 11.11)
      setScale1(1 + scrollY.get() / 1000)
      setScale2(1 - scrollY.get() / 1600)
      setOpacity(Math.min(0.8, Math.max(0.2, (scrollY.get() / 300) * 0.8)))
    }

    scrollY.onChange(updateValues)

    return () => {
      scrollY.clearListeners()
    }
  }, [scrollY])

  useEffect(() => {
    // Update window dimensions on mount and resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Generate random positions that stay within viewport
  const generatePositions = (count) => {
    if (windowSize.width === 0) return []

    const positions = []
    for (let i = 0; i < count; i++) {
      positions.push({
        x: Math.random() * (windowSize.width * 0.8),
        y: Math.random() * 2000, // Distribute vertically throughout page
        size: Math.random() * 20 + 10,
        delay: Math.random() * 0.5,
        color: ["bg-pink-400", "bg-purple-400", "bg-blue-400", "bg-green-400", "bg-yellow-400", "bg-orange-400"][
          Math.floor(Math.random() * 6)
        ],
      })
    }
    return positions
  }

  useEffect(() => {
    circlesRef.current = generatePositions(8)
    squaresRef.current = generatePositions(6)
    trianglesRef.current = generatePositions(5)
  }, [windowSize])

  const circles = circlesRef.current
  const squares = squaresRef.current
  const triangles = trianglesRef.current

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Circles */}
      {circles.map((circle, i) => (
        <motion.div
          key={`circle-${i}`}
          className={`absolute rounded-full ${circle.color} opacity-70`}
          style={{
            x: circle.x,
            y: scrollY.get() ? circle.y + (i % 2 === 0 ? 200 : -200) * (scrollY.get() / 1000) : circle.y,
            width: circle.size,
            height: circle.size,
            opacity,
            rotate: scrollY.get() ? i * 40 * (scrollY.get() / 1000) : 0,
            scale: scrollY.get()
              ? 1 +
                (scrollY.get() > 500
                  ? 1.2 - 1 - ((scrollY.get() - 500) / 500) * (1.2 - 0.8)
                  : (scrollY.get() / 500) * (1.2 - 1))
              : 1,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.8, delay: circle.delay }}
        />
      ))}

      {/* Squares */}
      {squares.map((square, i) => (
        <motion.div
          key={`square-${i}`}
          className={`absolute ${square.color} opacity-70`}
          style={{
            x: square.x,
            y: scrollY.get() ? square.y + (i % 2 === 0 ? -150 : 150) * (scrollY.get() / 1000) : square.y,
            width: square.size,
            height: square.size,
            opacity,
            rotate: scrollY.get() ? i * 60 * (scrollY.get() / 1000) : 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.8, delay: square.delay }}
        />
      ))}

      {/* Triangles (using CSS triangles) */}
      {triangles.map((triangle, i) => (
        <motion.div
          key={`triangle-${i}`}
          className="absolute opacity-70"
          style={{
            x: triangle.x,
            y: scrollY.get() ? triangle.y + (i % 2 === 0 ? 100 : -100) * (scrollY.get() / 1000) : triangle.y,
            width: 0,
            height: 0,
            opacity,
            borderLeft: `${triangle.size / 2}px solid transparent`,
            borderRight: `${triangle.size / 2}px solid transparent`,
            borderBottom: `${triangle.size}px solid ${
              triangle.color === "bg-pink-400"
                ? "#f472b6"
                : triangle.color === "bg-purple-400"
                  ? "#c084fc"
                  : triangle.color === "bg-blue-400"
                    ? "#60a5fa"
                    : triangle.color === "bg-green-400"
                      ? "#4ade80"
                      : triangle.color === "bg-yellow-400"
                        ? "#facc15"
                        : "#fb923c"
            }`,
            rotate: scrollY.get() ? i * 90 * (scrollY.get() / 1000) : 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.8, delay: triangle.delay }}
        />
      ))}

      {/* Floating dots */}
      <motion.div
        className="absolute right-[10%] top-[20%] w-3 h-3 rounded-full bg-teal-400"
        style={{ y: y1, opacity }}
      />
      <motion.div
        className="absolute left-[15%] top-[40%] w-4 h-4 rounded-full bg-indigo-400"
        style={{ y: y2, rotate: rotate1, opacity }}
      />
      <motion.div
        className="absolute right-[20%] top-[60%] w-5 h-5 rounded-full bg-rose-400"
        style={{ y: y3, scale: scale1, opacity }}
      />
      <motion.div
        className="absolute left-[25%] top-[80%] w-6 h-6 rounded-full bg-amber-400"
        style={{ y: y1, rotate: rotate2, scale: scale2, opacity }}
      />
    </div>
  )
}

export default ScrollDecorations

