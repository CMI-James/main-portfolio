import React from "react";
import { motion } from "framer-motion";
import { expand, opacity } from "./anim";
import useScrollSection from "@/hooks/useScrollSection";
import { getSectionClasses } from "@/utils/sectionUtils";

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
  const section = useScrollSection();
  const { transitionColor, dotColor } = getSectionClasses(section);
  return (
    <div className={`page stairs py-10 px-4 md:px-8 xl:px-12 ${dotColor} ${className}`} style={{ backgroundColor }}>
      <motion.div
        {...anim(opacity)}
        className={`fixed w-full h-screen  z-[100000] pointer-events-none top-0 left-0 ${transitionColor}`}
      />
      <div className="fixed w-screen h-screen flex left-0 top-0 pointer-events-none z-[200000]">
        {[...Array(nbOfColumns)].map((_, i) => {
          return (
            <motion.div
              key={i}
              {...anim(expand, nbOfColumns - i)}
              className={`relative h-full w-full ${transitionColor}`}
            />
          );
        })}
      </div>
      {children}
    </div>
  );
}
