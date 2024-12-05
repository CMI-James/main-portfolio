import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import useScrollSection from "@/hooks/useScrollSection";
import { getSectionClasses } from "@/utils/sectionUtils";
import Navbar from "./navbar/Navbar";
import useDynamicPageEffects from "@/hooks/useDynamicPageEffects";
import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import LoadingScreen from "./ui/LoadingScreen";

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

  const { backgroundColor, color } = currentColors;
  return (
    <div>
      <AnimatePresence mode="wait">
        <div
          key={router.pathname}
          className={`${selectionColor} ${mainColor} `}
        >
          {isLoading ? (
            <LoadingScreen />
          ) : (
            <>
              <Navbar />
              {children}
            </>
          )}
        </div>
       
       
      </AnimatePresence>
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
    </div>
  );
}
