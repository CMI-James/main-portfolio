import ContactMe from "../components/contact/Contact";
import Footer from "@/components/Footer";
import Transition from "@/components/ui/Transition";
import React from "react";

const ContactPage = () => {
  return (
    <Transition>
      <ContactMe/>
      <Footer/>
    </Transition>
  );
};

export default ContactPage;
