import AboutMe from "@/components/About";
import Section from "@/components/ui/Section";
import SectionBody from "@/components/ui/SectionBody";
import SectionHeader from "@/components/ui/SectionHeader";
import Transition from "@/components/ui/Transition";
import React from "react";

const About = () => {
  return (
    <Transition className="theme-dark-light">
      <Section>
        <SectionHeader title="About" />
        <SectionBody>
          <AboutMe />
        </SectionBody>
      </Section>
    </Transition>
  );
};

export default About;
