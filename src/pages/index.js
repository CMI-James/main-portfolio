import { motion, useAnimation } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Transition from "@/components/ui/Transition";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import ContactMe from "@/components/contact/Contact";

const Home = () => {
  return (
    <Transition>
      <motion.div className={`min-h-screen relative `}>
        <Hero />
        <Description />
        <About />
        <Services />
        <ContactMe className="py-[10%]" />
        <Footer />
      </motion.div>
    </Transition>
  );
};

export default Home;
