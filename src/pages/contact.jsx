import ContactMe from "@/components/contact/Contact";
import Footer from "@/components/Footer";
import Transition from "@/components/ui/Transition";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Contact = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const fontSize = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    ["6rem", "4rem", "2rem"]
  ); // Gradually reduce size
  return (
    <Transition ref={container}>
      <div className="relative py-10 mb-10 px-4 md:px-8 xl:px-12">
        <motion.p
         className="z-[10000] sticky top-0  mx-auto w-fit"
          style={{ fontSize }} // Use the dynamic font size
        >
          Contact
        </motion.p>
        <ContactMe />
      </div>
      <Footer />
    </Transition>
  );
};

export default Contact;
