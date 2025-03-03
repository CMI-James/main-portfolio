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
          <div className="h-[200vh]"></div>
        </SectionBody>
      </Section>
    </Transition>
  );
};

export default About;
