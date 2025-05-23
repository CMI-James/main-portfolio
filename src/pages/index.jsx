"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import Hero from "@/components/home/Hero"
import About from "@/components/home/About"
import Services from "@/components/home/Services"
import Transition from "@/components/common/Transition"
import Description from "@/components/home/Description"
import ContactMe from "@/components/home/Contact"
import Projects from "@/components/home/Projects"

// Dynamically import FloatingElements with SSR disabled
const FloatingElements = dynamic(() => import("@/components/common/FloatingElements"), { ssr: false })

const Home = () => {
  return (
    <Transition>
      <motion.div className={`min-h-screen relative`}>
        {/* Add the FloatingElements component at the top level */}
        {/* <FloatingElements /> */}

        <Hero />
        <Description />
        <About />
        <Projects limit={3} />
        <Services />
        <ContactMe />
      </motion.div>
    </Transition>
  )
}

export default Home
