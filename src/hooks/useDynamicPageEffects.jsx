// hooks/useDynamicPageEffects.js
import { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useRouter } from "next/router";
import { getSectionClasses } from "@/utils/sectionUtils";

const useDynamicPageEffects = (section) => {
  const router = useRouter();
  const controls = useAnimation();
  const navControls = useAnimation();
  const buttonControls = useAnimation();
  const [currentColors, setCurrentColors] = useState({
    backgroundColor: "#f5f5dc",
    color: "#0f0500",
  });
  const [isScrolling, setIsScrolling] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleMouseDown = () => {
    const newTimer = setTimeout(() => {
      router.push("/memory-login");
    }, 2000);
    setTimer(newTimer);
  };

  const handleMouseUp = () => {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
  };

  // Change background and text color based on the current section
  useEffect(() => {
    const root = document.documentElement;
    const { backgroundColor, color } = getSectionClasses(section);

    setCurrentColors({ backgroundColor, color });

    controls.start({
      backgroundColor: backgroundColor,
      color: color,
      transition: { duration: 0.5 },
    });
    navControls.start({
      backgroundColor: backgroundColor,
      color: color,
      transition: { duration: 0.5 },
    });

    // Update custom scrollbar colors
    root.style.setProperty("--scrollbar-track-color", backgroundColor);
    root.style.setProperty("--scrollbar-thumb-color", color);
  }, [section, controls, navControls]);

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(window.scrollTimeout);

      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animate button based on scroll state and section
  useEffect(() => {
    buttonControls.start({
      opacity: isScrolling ? 0.6 : 0.1,
      scale: section > 0 ? 1 : 0,
      transition: { duration: 1 },
    });
  }, [isScrolling, section, buttonControls]);

  // Smooth scroll to top function
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      const SmoothScroll = require("smooth-scroll");
      const scroll = new SmoothScroll();
      scroll.animateScroll(0, null, {
        speed: 4000,
        speedAsDuration: true,
      });
    }
  };

  return {
    controls,
    navControls,
    buttonControls,
    currentColors,
    scrollToTop,
    handleMouseDown,
    handleMouseUp,
  };
};

export default useDynamicPageEffects;
