"use client"

import Transition from "@/components/common/Transition"
import { motion } from "framer-motion"
import { Home, FileText, ArrowLeft } from "lucide-react"
import Link from "next/link"

const NotFound = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(139, 69, 19, 0.3)",
        "0 0 40px rgba(139, 69, 19, 0.5)",
        "0 0 20px rgba(139, 69, 19, 0.3)",
      ],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <Transition className="theme-dark-light">
      <motion.div
        className="flex flex-col px-5 md:px-10 xl:px-20 2xl:px-28 text-center justify-center items-center h-screen w-full relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating background elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-brown-1000/10 dark:bg-beige/10"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-32 right-16 w-16 h-16 rounded-full bg-brown-1000/10 dark:bg-beige/10"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-12 h-12 rounded-full bg-brown-1000/10 dark:bg-beige/10"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />

        {/* Main content */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1 className="text-special mb-4 font-bold" variants={glowVariants} animate="animate">
            404
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-semibold">Where are you navigating to, Dawg?</h2>
          <p className="text-lg md:text-xl text-brown-700 dark:text-beige/70 max-w-2xl mx-auto font-lora">
            Looks like you've wandered into uncharted territory. Don't worry, even the best explorers get lost
            sometimes!
          </p>
        </motion.div>

        {/* Animated illustration */}
        <motion.div variants={itemVariants} className="mb-12">
          <motion.div className="relative w-32 h-32 mx-auto" variants={floatingVariants} animate="animate">
            <div className="w-full h-full rounded-full border-4 border-brown-1000 dark:border-beige flex items-center justify-center text-6xl">
              🤔
            </div>
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-brown-1000 dark:bg-beige rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Action buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/" passHref>
            <motion.button
              className="theme-light-dark-button flex items-center gap-3 px-6 py-3 rounded-lg border-2 font-semibold transition-colors duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </motion.button>
          </Link>

          <Link href="/resume" passHref>
            <motion.button
              className="theme-dark-light-button dark:!border-beige !border-brown-1000 flex items-center gap-3 px-6 py-3 rounded-lg border-2 font-semibold transition-colors duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FileText className="w-5 h-5" />
              <span>View Resume</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Back navigation hint */}
        <motion.div variants={itemVariants} className="mt-8 flex items-center gap-2 text-brown-700 dark:text-beige/70">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-lora">Or use your browser's back button</span>
        </motion.div>

        {/* Subtle animated background pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-brown-1000/5 dark:bg-beige/5 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </Transition>
  )
}

export default NotFound
