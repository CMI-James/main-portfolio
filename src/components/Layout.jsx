import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import useScrollSection from "@/hooks/useScrollSection";
import { getSectionClasses } from "@/utils/sectionUtils";
import Navbar from "./navbar/Navbar";
import useDynamicPageEffects from "@/hooks/useDynamicPageEffects";
import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import LoadingScreen from "./ui/LoadingScreen";
import AnimatedThemeIcon from "./AnimatedThemeIcon";

export default function Layout({ children }) {
  const router = useRouter();
  const section = useScrollSection();
  const { mainColor, selectionColor } = getSectionClasses(section);
  console.log("mainColor", mainColor);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); // Adjust to match your loading duration
    return () => clearTimeout(timer);
  }, []);
  const {
    controls,
    buttonControls,
    currentColors,
    scrollToTop,
    handleMouseDown,
    handleMouseUp,
  } = useDynamicPageEffects(section);

  return (
    <div className="">
      <AnimatePresence mode="wait">
        <div key={router.pathname}>
          <Navbar />
          {children}
        </div>
      </AnimatePresence>
      <motion.button
        onClick={scrollToTop}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={`fixed bottom-14 right-2 z-[10000] p-2 rounded-full`}
        initial={{ opacity: 0, scale: 0 }}
        animate={buttonControls}
      >
        <div className="border-2 p-1 rounded-full border-brown-1000 dark:border-beige">
          <FaArrowUp className="text-2xl text-brown-1000 dark:text-beige" />
        </div>
      </motion.button>
      <div className={`fixed bottom-2 right-2 z-[10000] p-2 rounded-full`}>
        <AnimatedThemeIcon />
      </div>
    </div>
  );
}
