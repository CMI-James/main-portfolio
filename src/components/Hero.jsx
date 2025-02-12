import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const textArray = ["HEY, I'M JAMES", "HEY, I'M JAMES", "HEY, I'M JAMES"];

  // Framer Motion animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const textVariants = {
    hidden: {
      y: 50, // Start position below
      opacity: 0, // Fully transparent
    },
    show: {
      y: 0, // End position at default
      opacity: 1, // Fully visible
      transition: {
        duration: 1.2, // Animation duration
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="relative h-[90vh] hero-clip "
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="fixed top-0 h-[90vh] w-full theme-dark-light">
        <motion.div
          className="sticky text-center theme-dark-light font-main top-0 h-[80vh] pt-[6rem] flex flex-col items-center justify-center text-4xl text-brown-1000 dark:text-beige bg-black"
        >
          {textArray.map((text, index) => (
            <motion.p
              key={index}
              variants={textVariants}
              className={`z-10 leading-[5rem] text-title sm:leading-[6rem] lg:leading-[10rem] font-extrabold  ${
                index === 1 ? "transparent-text" : ""
              }`}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}