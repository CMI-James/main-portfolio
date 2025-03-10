import React, { useEffect, useState } from "react";
import { useTransform, motion } from "framer-motion";

const SectionHeader = ({ title, scrollYProgress }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define font size ranges
  const fontSizeValues = isMobile
    ? ["4rem", "3rem", "2rem"] // Mobile/Tablet
    : ["6rem", "4rem", "2rem"]; // Desktop

  // Stabilized useTransform
  const fontSize = useTransform(scrollYProgress, [0, 0.2, 0.4], fontSizeValues);


  return (
    <motion.p
      className="z-[10000] sticky top-0 mx-auto w-fit"
      style={{ fontSize, willChange: "transform" }} // Optimized for smoother animations
    >
      {title}
    </motion.p>
  );
};

export default SectionHeader;
