import React from "react";
import { motion } from "framer-motion";
import { expand, opacity } from "../ui/anim";

export default function Transition({ children, backgroundColor, className }) {
  const anim = (variants, custom = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  const nbOfColumns = 5;

  return (
    <div
      className={`page stairs theme-dark-light ${className}`}
      style={{ backgroundColor }}
    >
      <motion.div
        {...anim(opacity)}
        className={`fixed w-full h-screen  z-[100000] pointer-events-none top-0 left-0 bg-brown-1000 dark:bg-beige`}
      />
      <div className="fixed w-screen h-screen flex left-0 top-0 pointer-events-none z-[200000]">
        {[...Array(nbOfColumns)].map((_, i) => {
          return (
            <motion.div
              key={i}
              {...anim(expand, nbOfColumns - i)}
              className={`relative h-full w-full bg-brown-1000 dark:bg-beige`}
            />
          );
        })}
      </div>
      {children}
    </div>
  );
}
