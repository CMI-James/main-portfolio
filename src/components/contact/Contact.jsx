import ContactForm from "./components/contactForm";
import ContactDetails from "./components/contactDetails";
import Section from "../layout/section";
import SectionHeader from "../layout/section-header";
import SectionBody from "../layout/section-body";

export default function ContactMe({ className = "" }) {
  return (
    <Section className="theme-dark-light " aria-label="contact me">
      <SectionHeader title="Contact" />
      <SectionBody>
        <div className=" flex flex-col md:flex-row gap-x-5  gap-y-20 ">
          <div className="flex-1">
            <h3 className="max-w-lg 2xl:max-w-3xl text-heading-3 2xl:text-7xl font-semibold leading-tight ">
              Got a great idea? <br /> Let's make it happen!
            </h3>
            <p className="pt-4 max-w-md 2xl:max-w-2xl text-body-2 2xl:text-4xl text-brown-700 dark:text-beige/70 ">
              I am currently available for freelance frontend development work
              and open to new projects.
            </p>
            <ContactForm />
          </div>
          <ContactDetails />
        </div>
      </SectionBody>
    </Section>
  );
}
