"use client"

import { motion } from "framer-motion"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Transition from "@/components/ui/Transition"
import Description from "@/components/Description"
import Footer from "@/components/Footer"
import ContactMe from "@/components/contact/Contact"
import FloatingElements from "@/components/ui/FloatingElements"

const Home = () => {
  return (
    <Transition>
      <motion.div className={`min-h-screen relative`}>
        {/* Add the FloatingElements component at the top level */}
        <FloatingElements />

        <Hero />
        <Description />
        <About />
        <Services />
        <ContactMe  />
        <Footer />
      </motion.div>
    </Transition>
  )
}

export default Home

