import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import useScrollSection from "@/hooks/useScrollSection";
import { getSectionClasses } from "@/utils/sectionUtils";
import Navbar from "./navbar/Navbar";
import useDynamicPageEffects from "@/hooks/useDynamicPageEffects";
import { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Layout({ children }) {
  const router = useRouter();
  const section = useScrollSection();
  const { mainColor, selectionColor } = getSectionClasses(section);
  console.log("mainColor", mainColor);

  const {
    controls,
    buttonControls,
    currentColors,
    scrollToTop,
    handleMouseDown,
    handleMouseUp,
  } = useDynamicPageEffects(section);

  const { backgroundColor, color } = currentColors;
  return (
    <AnimatePresence mode="wait">
      <div key={router.pathname} className={`${selectionColor} ${mainColor} `}>
        <Navbar />
        {children}
      </div>
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={`fixed bottom-2 right-2 z-[10000] p-2 rounded-full`}
        style={{
          backgroundColor: color,
          color: backgroundColor,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={buttonControls}
      >
        <FaArrowUp className="text-2xl" />
      </motion.button>
    </AnimatePresence>
  );
}
