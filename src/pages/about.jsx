import AboutMe from "@/components/home/About";
import Transition from "@/components/common/Transition";
import React from "react";

const About = () => {
  return (
    <Transition className="theme-dark-light">
      <AboutMe />
    </Transition>
  );
};

export default About;