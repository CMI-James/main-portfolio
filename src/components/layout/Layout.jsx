import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import useScrollSection from "@/hooks/useScrollSection";
import { getSectionClasses } from "@/utils/sectionUtils";
import Navbar from "./Navbar";
import useDynamicPageEffects from "@/hooks/useDynamicPageEffects";
import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import LoadingScreen from "../ui/LoadingScreen";
import AnimatedThemeIcon from "../common/AnimatedThemeIcon";
import Footer from "./Footer";
import LoaderWrapper from "./Loader";
import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";

export default function Layout({ children }) {
  const router = useRouter();
  const section = useScrollSection();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); // Adjust to match your loading duration
    return () => clearTimeout(timer);
  }, []);
  const { buttonControls, scrollToTop, handleMouseDown, handleMouseUp } =
    useDynamicPageEffects(section);

  return (
    <LoaderWrapper>
      <div className="">
        <AnimatePresence mode="wait">
          <div key={router.pathname}>
            <Navbar />
            {children}
            <Footer />
          </div>
        </AnimatePresence>
        <div className="fixed bottom-2 right-4 z-[10000]">
          <div className="flex flex-col items-center justify-center">
            <motion.button
              onClick={scrollToTop}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              className={` z-[10000] p-2 rounded-full text-xl`}
              initial={{ opacity: 0, scale: 0 }}
              animate={buttonControls}
            >
              <div className="border-2 p-2 rounded-full border-zinc-500 dark:border-zinc-500">
                <FaArrowUp className="text-2xl text-zinc-500" />
              </div>
            </motion.button>
            <Link href="/resume" className={` p-2 rounded-full text-xl w-fit border-2 text-green-500 border-green-500 transition-colors duration-500`}>
              <BriefcaseBusiness />
            </Link>
            <div className={` p-2 rounded-full`}>
              <AnimatedThemeIcon />
            </div>
          </div>
        </div>
      </div>{" "}
    </LoaderWrapper>
  );
}
