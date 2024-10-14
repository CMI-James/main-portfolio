"use client";
import Transition from "@/components/ui/Transition";
import React from "react";
import Card from "./projects/components/projectsCard";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { projects } from "./projects/data";
const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const fontSize = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    ["6rem", "4rem", "2rem"]
  ); // Gradually reduce size
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <Transition ref={container} className="relative py-10 px-4 md:px-8 xl:px-12">
      <motion.p
        className=" sticky top-0 text-center"
        style={{ fontSize }} // Use the dynamic font size
      >
        Projects
      </motion.p>

      <div className="">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </Transition>
  );
};

export default Projects;
