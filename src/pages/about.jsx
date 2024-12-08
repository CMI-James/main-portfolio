import Section from "@/components/ui/Section";
import SectionBody from "@/components/ui/SectionBody";
import SectionHeader from "@/components/ui/SectionHeader";
import Transition from "@/components/ui/Transition";
import React from "react";

const About = () => {
  return (
    <Transition>
      {/* <div className="flex justify-center items-center h-screen w-full">
        <p className="text-title">About</p>
      </div>
       */}
      <Section>
        <SectionHeader title="About" />
        <SectionBody><div className="h-[200vh]"></div></SectionBody>
      </Section>
    </Transition>
  );
};

export default About;
