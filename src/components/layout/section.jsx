import React, { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const Section = ({
  children,
  className,
 
  wrapperClassName,
  id,
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 20%", "end 20%"], // Adjusted for better smoothness
  });

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Prevent multiple Lenis instances
  }, []);

  return (
    <section
      ref={container}
      className={`relative w-full  ${wrapperClassName}`}
    >
      <div className={`container px-4 md:px-6 mx-auto max-w-7xl ${className}`}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { scrollYProgress })
        )}
      </div>
    </section>
  );
};

export default Section;
