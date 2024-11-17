import React, { useEffect, useState } from "react";
import { useTransform, motion } from "framer-motion";

const SectionHeader = ({ title, scrollYProgress }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size on mount and update on resize
  useEffect(() => {
    const handleResize = () => {
      // Check if the screen width is less than 1024px (tablet and below)
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Font size transform based on screen size
  const fontSize = isMobile
    ? useTransform(scrollYProgress, [0, 0.1, 0.2], ["4rem", "3rem", "2rem"]) // Mobile/Tablet
    : useTransform(scrollYProgress, [0, 0.1, 0.2], ["6rem", "4rem", "2rem"]); // iPad Pro and above

  return (
    <motion.p
      className="z-[10000] sticky top-0 mx-auto w-fit"
      style={{ fontSize }}
    >
      {title}
    </motion.p>
  );
};

export default SectionHeader;
