import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Curve() {

  // State to hold the path strings after component mounts
  const [paths, setPaths] = useState({
    initialPath: "",
    targetPath: "",
  });

  useEffect(() => {
    // Check if we are running in the browser
    if (typeof window !== "undefined") {
      // Set the paths after the component has mounted
      const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
        window.innerHeight
      } Q-100 ${window.innerHeight / 2} 100 0`;
      const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
        window.innerHeight
      } Q100 ${window.innerHeight / 2} 100 0`;

      setPaths({ initialPath, targetPath });
    }
  }, []);

  const curve = {
    initial: {
      d: paths.initialPath,
    },
    enter: {
      d: paths.targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: paths.initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  // Render only if both paths are set
  return (
    <svg
      className={`absolute top-0 -left-[6.2rem] w-[6.2rem] h-screen stroke-none fill-brown-1000 dark:fill-beige`}
    >
      {paths.targetPath && (
        <motion.path
          variants={curve}
          initial="initial"
          animate="enter"
          exit="exit"
        ></motion.path>
      )}
    </svg>
  );
}
