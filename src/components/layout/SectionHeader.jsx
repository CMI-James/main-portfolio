import React, { useEffect, useState } from "react";
import { useTransform, motion } from "framer-motion";

const SectionHeader = ({ title, scrollYProgress }) => {
  const [deviceType, setDeviceType] = useState(null);

  useEffect(() => {
    // Function to determine device type
    function getDeviceType() {
      const width = window.innerWidth;
      if (width < 768) return "mobile";
      if (width < 1024) return "tablet";
      return "desktop";
    }

    // Set initial device type
    setDeviceType(getDeviceType());

    // Listen for window resize and update device type
    const handleResize = () => setDeviceType(getDeviceType());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define font size ranges
  const fontSizeValues =
    deviceType === "mobile"
      ? ["3rem", "2.5rem", "1.75rem"] // Mobile
      : deviceType === "tablet"
      ? ["4rem", "2.5rem", "1.5rem"] // Tablet
      : ["6rem", "4rem", "2rem"]; // Desktop
  // Stabilized useTransform
  const fontSize = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3],
    fontSizeValues
  );

  return (
    <motion.p
      className="z-[20] sticky top-0.5 md:top-1 lg:top-0 mx-auto w-fit  mb-20"
      style={{ fontSize, willChange: "transform" }} // Optimized for smoother animations
    >
      {title}
    </motion.p>
  );
};

export default SectionHeader;
