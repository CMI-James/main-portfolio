import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { getSectionClasses } from "@/utils/sectionUtils";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonial";
import useScrollSection from "@/hooks/useScrollSection";
import { useRouter } from "next/router";
import Transition from "@/components/ui/Transition";
import Contact from "@/components/contact/Contact";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import ContactMe from "@/components/contact/Contact";

const Home = () => {
  const router = useRouter();
  const section = useScrollSection();
  const controls = useAnimation();
  const navControls = useAnimation();
  const buttonControls = useAnimation();
  const ref = useRef(null);

  const [currentColors, setCurrentColors] = useState({
    backgroundColor: "#f5f5dc",
    color: "#0f0500",
  });
  const [isScrolling, setIsScrolling] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleMouseDown = () => {
    const newTimer = setTimeout(() => {
      router.push("/memory-login");
    }, 2000);
    setTimer(newTimer);
  };

  const handleMouseUp = () => {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    const { backgroundColor, color } = getSectionClasses(section);

    setCurrentColors({ backgroundColor, color });

    controls.start({
      backgroundColor: backgroundColor,
      color: color,
      transition: { duration: 0.5 },
    });
    navControls.start({
      backgroundColor: backgroundColor,
      transition: { duration: 0.5 },
      color: color,
    });

    root.style.setProperty("--scrollbar-track-color", backgroundColor);
    root.style.setProperty("--scrollbar-thumb-color", color);
  }, [section, controls, navControls]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(window.scrollTimeout);

      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 200); // reduced debounce time for faster responsiveness
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update button animation based on isScrolling and section
    buttonControls.start({
      opacity: isScrolling ? 0.6 : 0.1,
      scale: section > 0 ? 1 : 0,
      transition: { duration: 1 }, // Smooth transition between states
    });
  }, [isScrolling, section, buttonControls]);

  const { backgroundColor, color } = currentColors;

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      const SmoothScroll = require("smooth-scroll");
      const scroll = new SmoothScroll();
      let scrollSpeed = 4000;
      scroll.animateScroll(0, null, {
        speed: scrollSpeed,
        speedAsDuration: true,
      });
    }
  };

  return (
    <Transition>
      <motion.div
        ref={ref}
        initial={{ backgroundColor: "#f5f5dc", color: "#0f0500" }}
        animate={controls}
        className={`min-h-screen relative`}
      >
        <Hero />
        <Description />
        <About />
        <Services />
        <Projects limit={3}/>
        <Testimonial />
        <ContactMe className="py-[10%]"/>
        <Footer />
        <motion.button
          onClick={scrollToTop}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className={`fixed bottom-2 right-2 z-[10000] p-2 rounded-full`}
          style={{
            backgroundColor: color,
            color: backgroundColor,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={buttonControls}
        >
          <FaArrowUp className="text-2xl" />
        </motion.button>
      </motion.div>
    </Transition>
  );
};

export default Home;
