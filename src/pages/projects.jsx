"use client";
import Transition from "@/components/ui/Transition";
import React from "react";
import Projects from "@/components/Projects";
const ProjectsPage = () => {
  return (
    <Transition>
      <Projects />
    </Transition>
  );
};

export default ProjectsPage;
