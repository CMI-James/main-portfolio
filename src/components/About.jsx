import React from "react";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import SectionBody from "./ui/SectionBody";
const About = () => {
  return (
    <Section className="theme-dark-light">
      <SectionHeader title="About Me" />
      <SectionBody>
        <div className="h-[200vh]">
          <div><img src="" alt="" /></div>
          <div></div>
        </div>
      </SectionBody>
    </Section>
  );
};

export default About;
