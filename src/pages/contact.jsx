import ContactMe from "../components/contact/Contact";
import Footer from "@/components/Footer";
import Section from "@/components/ui/Section";
import SectionBody from "@/components/ui/SectionBody";
import SectionHeader from "@/components/ui/SectionHeader";
import Transition from "@/components/ui/Transition";
import React from "react";

const ContactPage = () => {
  return (
    <Transition className="theme-dark-light">
      <Section extraPadding=" " >
        <SectionHeader title="Contact" />
        <SectionBody>
          <ContactMe />
          <Footer />
        </SectionBody>
      </Section>
    </Transition>
  );
};

export default ContactPage;
