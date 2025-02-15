"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const MenuBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isDelayedActive, setIsDelayedActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setTimeout(() => {
        setIsDelayedActive(true);
      }, 400);
    } else {
      setIsDelayedActive(false);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isActive]);

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: 120 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.5, rotate: -120 },
  };
  const iconVariantsX = {
    hidden: { opacity: 0, scale: 0.5, rotate: -120 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.5, rotate: 120 },
  };
  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.button
      className="relative w-8 h-8 focus:outline-none"
      onClick={() => setIsActive(!isActive)}
      aria-label="Toggle menu"
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <AnimatePresence mode="wait">
        {!isActive ? (
          <motion.div
            key="menu"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <Menu
              className={`w-auto h-8 ${
                isDelayedActive
                  ? "text-beige dark:text-brown-1000"
                  : "text-brown-1000 dark:text-beige"
              }`}
            />
          </motion.div>
        ) : (
          <motion.div
            key="close"
            variants={iconVariantsX}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <X
              className={`w-auto h-8 ${
                isDelayedActive
                  ? "text-beige dark:text-brown-1000"
                  : "text-brown-1000 dark:text-beige"
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default MenuBar;
