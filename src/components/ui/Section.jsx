import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const Section = ({
  children,
  className,
  extraPadding = "py-10 px-4 md:px-8 xl:px-12 ",
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div ref={container} className={`relative ${extraPadding}  ${className}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { scrollYProgress })
      )}
    </div>
  );
};

export default Section;
