import React, { useEffect, useState } from "react";
import { useTransform, motion } from "framer-motion";

const SectionHeader = ({ title, scrollYProgress }) => {
  const [device, setDevice] = useState(getDeviceType());

  function getDeviceType() {
    const width = window.innerWidth;
    if (width < 768) return "mobile";
    if (width < 1024) return "tablet";
    return "desktop";
  }

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDeviceType());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define font size ranges
  const fontSizeValues =
    device === "mobile"
      ? ["3rem", "2.5rem", "1.75rem"] // Mobile
      : device === "tablet"
      ? ["4rem", "3.5rem", "2.5rem"] // Tablet
      : ["6rem", "4rem", "2rem"]; // Desktop
  // Stabilized useTransform
  const fontSize = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3],
    fontSizeValues
  );

  return (
    <motion.p
      className="z-[10000] sticky top-0.5 sm:top-0 mx-auto w-fit"
      style={{ fontSize, willChange: "transform" }} // Optimized for smoother animations
    >
      {title}
    </motion.p>
  );
};

export default SectionHeader;
