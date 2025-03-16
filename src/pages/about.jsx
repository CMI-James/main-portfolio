import AboutMe from "@/components/About";
import Footer from "@/components/Footer";
import Transition from "@/components/ui/Transition";
import React from "react";

const About = () => {
  return (
    <Transition className="theme-dark-light">
      <AboutMe />
    </Transition>
  );
};

export default About;
