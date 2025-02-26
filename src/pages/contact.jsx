
import Footer from "@/components/Footer";
import Section from "@/components/ui/Section";
import SectionBody from "@/components/ui/SectionBody";
import SectionHeader from "@/components/ui/SectionHeader";
import Transition from "@/components/ui/Transition";
import React from "react";
import Contact from "../components/contact/Contact";

const ContactPage = () => {
  return (
    <Transition>
      <Section>
        <SectionHeader title="Contact" />
        <SectionBody>
          <Contact />
          <Footer />
        </SectionBody>
      </Section>
    </Transition>
  );
};

export default ContactPage;
