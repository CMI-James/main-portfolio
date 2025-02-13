import React from "react";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import SectionBody from "./ui/SectionBody";
const About = () => {

  return (
    <Section className="theme-dark-light">
      <SectionHeader title="About Me" />
      <SectionBody>
        <div className="h-[200vh]">this year na my year, i can be the man of the year</div>
      </SectionBody>
    </Section>
  );
};

export default About;
