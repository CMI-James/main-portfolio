import AboutMe from "@/components/About";
import ScrollDecorations from "@/components/ui/ScrollDecorations";
import Transition from "@/components/ui/Transition";
import React from "react";

const About = () => {
  return (
    <Transition className="theme-dark-light">
            <ScrollDecorations />
      <AboutMe />
    </Transition>
  );
};

export default About;
