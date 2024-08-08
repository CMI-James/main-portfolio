import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { getSectionClasses } from "@/utils/sectionUtils";
import Transition from "@/components/PageTransition/Transition";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import useScrollSection from "@/hooks/useScrollSection";
import { useRouter } from "next/router";
const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const section = useScrollSection();
  const controls = useAnimation();
  const navControls = useAnimation();
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
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        className={`min-h-screen relative `}
      >
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonial />
        <Contact />

        <button
          onClick={scrollToTop}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className={`fixed bottom-2 right-2 z-[10000] p-2 rounded-full transition-opacity duration-1000`}
          style={{
            backgroundColor: color,
            color: backgroundColor,
            opacity: isScrolling ? 0.9 : 0.1,
          }}
        >
          <FaArrowUp className="text-2xl" />
        </button>
      </motion.div>
    </Transition>
  );
};

export default Home;
