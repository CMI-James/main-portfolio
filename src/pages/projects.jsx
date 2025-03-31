"use client";
import Transition from "@/components/common/Transition";
import React from "react";
import Projects from "@/components/home/Projects";
const ProjectsPage = () => {
  return (
    <Transition>
      <Projects />
    </Transition>
  );
};

export default ProjectsPage;
