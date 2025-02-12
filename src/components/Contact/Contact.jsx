import { useEffect, useState, useRef } from "react";
import Heading from "../ui/Heading";
import ContactForm from "./components/contactForm";
import ContactDetails from "./components/contactDetails";

export default function ContactMe({ className = "" }) {
 

  return (
    <section
    className={`px-5 md:px-10 xl:px-20 2xl:px-28 relative ${className}`}
      aria-label="contact me"
    >
      {/* <Heading title="Contact" /> */}
      <div className="pt-10 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12 sticky top-0">
        <div className="col-span-4">
          <h3 className="max-w-lg 2xl:max-w-3xl text-heading-3 2xl:text-7xl font-semibold leading-tight text-brown-1000">
            Got a great idea? <br /> Let's make it happen!
          </h3>
          <p className="pt-4 max-w-md 2xl:max-w-2xl text-body-2 2xl:text-4xl text-brown-700 ">
            I am currently available for freelance frontend development work and
            open to new projects.
          </p>
          <ContactForm />
        </div>
        <ContactDetails  />
      </div>
    </section>
  );
}
