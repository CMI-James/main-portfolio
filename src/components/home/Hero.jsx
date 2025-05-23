import React from "react";
import { motion } from "framer-motion";
import Section from "../layout/Section";

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
    <Section id="hero" wrapperClassName="!py-0">
      <motion.section
        className="relative h-[90vh] hero-clip flex justify-center"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <div className="fixed top-0 h-[90vh] w-full theme-dark-light">
          <motion.div className="sticky text-center font-main theme-dark-light top-0 h-[80vh] pt-[6rem] flex flex-col items-center justify-center text-4xl  bg-black">
            {textArray.map((text, index) => (
              <motion.p
                key={index}
                variants={textVariants}
                className={`z-10 leading-[6rem] text-8xl sm:leading-[7.5rem] lg:leading-[10rem] font-extrabold  ${
                  index === 1
                    ? "transparent-text transition-colors duration-700"
                    : ""
                }`}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </Section>
  );
}
