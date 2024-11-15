import React from "react";
import { useTransform, motion } from "framer-motion";

const SectionHeader = ({ title, scrollYProgress }) => {
  const fontSize = useTransform(scrollYProgress, [0, 0.1, 0.2], ["6rem", "4rem", "2rem"]);

  return (
    <motion.p className="z-[10000] sticky top-0 mx-auto w-fit" style={{ fontSize }}>
      {title}
    </motion.p>
  );
};

export default SectionHeader;
