import React from "react";
import Word from "./ui/TextReveal";
import Section from "./layout/section";
export default function Description() {
  const paragraph =
    "I create captivating user interfaces that inspire and connect with people through development and design.";
  return (
    <Section
      id="description-section"
      wrapperClassName="relative !py-0 z-20 h-screen hidden-scrollbar theme-light-dark  flex w-full items-center justify-center space-x-20"
    >
      <Word paragraph={paragraph} />
    </Section>
  );
}
