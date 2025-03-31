import ContactMe from "../components/contact/Contact";
import Transition from "@/components/ui/Transition";
import React from "react";

const ContactPage = () => {
  return (
    <Transition>
      <ContactMe />
    </Transition>
  );
};

export default ContactPage;
