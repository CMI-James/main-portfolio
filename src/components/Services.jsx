// src/components/Skills.js
import React from "react";
import Heading from "./ui/Heading";
import Section from "./ui/section";
import SectionHeader from "./ui/section-header";
import SectionBody from "./ui/section-body";

const MyServices = () => {
  // const expertiseItems = [
  //   "Web Development",
  //   "Web Design",
  //   "Wireframing",
  //   "UI/UX Design",
  //   "Version Control (Git)"
  // ];
  const expertiseItems = [
    "Web Development",
    "Responsive UI",
    "UI Design",
    "State Logic",
    "API Integration",
    "Animations",
  ];

  const toolBoxItems = [
    "JavaScript",
    // "HTML",
    // "CSS",
    "Figma",
    "Framer Motion",
    "GSAP",
    "TailwindCSS",
    "ReactJS",
    "NextJS",
  ];
  return (
    <Section className="theme-dark-light ">
      <SectionHeader title="Services" />
      <SectionBody>
        <div className="space-y-14 mt-20">
          {/* For mobile */}
          <div className="flex flex-col sm:hidden gap-5 relative">
            <h3 className="text-heading-3 2xl:text-7xl  font-semibold leading-tight sticky top-12 bg-beige dark:bg-brown-1000">
              my expertises.
            </h3>
            <p className="max-w-md xl:max-w-2xl text-body-1 2xl:text-3xl">
              I focus on all things design and web related. With each of my
              services, my goal is to deliver an impactful and elevating digital
              experience for everyone.
            </p>
            <div className="h-1 w-full bg-accent-100 opacity-50 sm:hidden sticky top-[86px]" />
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
          <div className="flex flex-col sm:hidden gap-5 relative">
            <h3 className="text-heading-3 2xl:text-7xl font-semibold leading-tight sticky top-12 bg-beige dark:bg-brown-1000">
              my digital tool box.
            </h3>
            <p className="max-w-md xl:max-w-2xl text-body-1 2xl:text-3xl">
              These are my go-to tech stack to make any projects happen. I am
              always eager to learn more about my current stack and new
              technologies that could expand my horizons.
            </p>
            <div className="h-1 w-full bg-accent-100 opacity-50 sm:hidden sticky top-[86px]" />
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

          {/* For tablet and above */}
          <div className="hidden mt-10 relative h-fit sm:grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24 ">
            <div className="space-y-6 sticky top-10 h-fit  ">
              <h3 className="text-heading-3 2xl:text-7xl font-semibold leading-tight ">
                my expertises.
              </h3>
              <p className="max-w-md xl:max-w-2xl text-body-1 2xl:text-3xl">
                I focus on all things design and web related. With each of my
                services, my goal is to deliver an impactful and elevating
                digital experience for everyone.
              </p>
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
          <div className="hidden mt-10 relative h-fit sm:grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24 ">
            <div className="space-y-6 sticky top-10 h-fit ">
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
export default MyServices;
