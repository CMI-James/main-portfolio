// src/components/Skills.js
import React from "react";
import Heading from "./ui/Heading";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import SectionBody from "./ui/SectionBody";

const Services = () => {
  const expertiseItems = [
    "Web Development",
    "Web Design",
    "Wireframing",
    "UI/UX Design",
    "Branding",
  ];

  const toolBoxItems = [
    "JavaScript",
    "HTML",
    "CSS",
    "Figma",
    "Webflow",
    "GSAP",
    "TailwindCSS",
    "ReactJS",
  ];
  return (
    <Section className="theme-dark-light relative">
      <SectionHeader title="Services" />
      <SectionBody>
        <div className="space-y-14">
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24">
            <div className="space-y-6">
              <div className="space-y-3 2xl:space-y-10">
                <h3 className="text-heading-3 2xl:text-7xl font-semibold leading-tight">
                  my expertises.
                </h3>
                <p className="max-w-md xl:max-w-2xl text-body-1 2xl:text-3xl">
                  I focus on all things design and web related. With each of my
                  services, my goal is to deliver an impactful and elevating
                  digital experience for everyone.
                </p>
              </div>
              <div className="h-1 w-full bg-accent-100 opacity-50 md:hidden"></div>
            </div>
            <div className="select-none leading-[2.3rem] text-secondary-500 md:leading-[2.5rem] lg:leading-[3.4rem]">
              {expertiseItems.map((item, index) => (
                <p
                  key={index}
                  className="font-general text-special 2xl:text-7xl font-extrabold"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24 ">
            <div className="space-y-6  sticky top-10">
              <div className="space-y-3 2xl:space-y-10  ">
                <h3 className="text-heading-3 2xl:text-7xl font-semibold leading-tight ">
                  my digital tool box.
                </h3>
                <p className="max-w-md xl:max-w-2xl text-body-1 2xl:text-3xl">
                  These are my go-to tech stack to make any projects happen. I
                  am always eager to learn more about my current stack and new
                  technologies that could expand my horizons.
                </p>
              </div>
              <div className="h-1 w-full bg-accent-100 opacity-50 md:hidden"></div>
            </div>
            <div className="select-none leading-[2.3rem] text-secondary-500 md:leading-[2.5rem] lg:leading-[3.4rem]">
              {toolBoxItems.map((item, index) => (
                <p
                  key={index}
                  className="font-general text-special 2xl:text-7xl font-extrabold"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </SectionBody>
    </Section>
  );
};
export default Services;
