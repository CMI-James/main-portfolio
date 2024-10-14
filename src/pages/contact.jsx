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
      <div className="flex flex-col justify-center items-center  w-full">
        <motion.p
          className=" sticky top-0 text-center"
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
