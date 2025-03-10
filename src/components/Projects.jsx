"use client";
import React, { useEffect } from "react";

import { useScroll } from "framer-motion";


import Card from "@/pages/projects/components/projectsCard";
import { projects } from "@/data/project";
import Section from "./ui/Section";
import SectionHeader from "./ui/section-header";
import SectionBody from "./ui/SectionBody";

const Projects = ({ limit }) => {
  const { scrollYProgress } = useScroll();

  const displayedProjects = limit ? projects.slice(0, limit) : projects;
console.log(displayedProjects)
  return (
    <Section className="theme-dark-light">
      <SectionHeader title="Projects" />
      <SectionBody >
        <div className="projects-grid ">
          {displayedProjects.map((project, i) => {
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
      </SectionBody>
    </Section>
  );
};

export default Projects;
