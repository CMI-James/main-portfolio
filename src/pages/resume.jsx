"use client"

import Transition from "@/components/common/Transition"
import { motion } from "framer-motion"
import { Download, MapPin, Linkedin, Github } from "lucide-react"
import Link from "next/link"

const Resume = () => {
  const resumeLink = "/Chibuikem_Ilonze_Resume.pdf"

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const listItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  // Work experience data
  const workExperience = [
    {
      id: 1,
      title: "Open-Source Contributor",
      company: "OnlyDust",
      duration: "February 2025 - Present",
      responsibilities: [
        "Contributed to 20+ open-source projects through OnlyDust, consistently delivering clean, well-structured code with a focus on frontend technologies like JavaScript, TypeScript, Next.js, ShadCN, and Framer Motion",
        "Known for timely delivery and high-quality contributions, which led to repeated collaboration with teams from Nigeria, Argentina, France, Puerto Rico, the US, and many more",
        "Currently a maintainer on one of the projects, actively managing issue tracking, reviewing and merging pull requests, and strengthening team communication through GitHub collaboration tools",
      ],
    },
    {
      id: 2,
      title: "IT trainee",
      company: "Cata Automated Systems Ltd.",
      duration: "April 2023 - May 2024",
      responsibilities: [
        "Received hands-on training in the installation and maintenance of CCTV systems (analog and digital), including camera setup, cable management, and troubleshooting recording devices.",
        "Participated in network administration tasks, such as configuring routers and switches, assigning IP addresses, and resolving connectivity issues.",
        "Trained in the setup and maintenance of intercom systems, ensuring reliable communication between devices and performing regular system checks.",
      ],
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "HNG TECH",
      duration: "July 2024 - August 2024",
      responsibilities: [
        "Designed and implemented a backend system for managing user organizations, including secure user authentication and authorization.",
        "Built and documented API endpoints, managed development tickets, and ensured seamless integration with frontend components.",
        "Collaborated with frontends, backends, and DevOps teams to ensure smooth integration, deployment, and operation of the blog site, addressing cross-functional challenges effectively.",
      ],
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "HNG TECH",
      duration: "September 2023 - November 2023",
      responsibilities: [
        "Enhanced multiple web applications by 20% through effective collaboration and developed a Chrome extension with cloud storage integration via APIs",
        "Utilized React, Next.js, and Tailwind CSS to build and optimize applications, incorporating user authentication and data storage with Firebase and Firestore.",
        "Leveraged GitHub for seamless team collaboration, ensuring timely project completions and adapting quickly to new technologies.",
      ],
    },
  ]

  return (
    <Transition className="theme-dark-light">
      <div className="min-h-screen py-16 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        <motion.div className="max-w-4xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          {/* Header Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">Chibuikem Ilonze</h1>
            <h2 className="text-xl sm:text-2xl mb-6">Electronics Engineer | Web Developer</h2>

            <motion.p
              variants={itemVariants}
              className="mb-6 text-brown-700 dark:text-beige/80 leading-relaxed font-lora"
            >
              A dedicated and versatile software engineer with a solid background in web development. Experienced in
              designing secure systems, managing API endpoints, and integrating frontend and backend components. Known
              for improving project efficiency and enhancing user experiences. Actively contributes to open source
              projects and manages tasks on GitHub.
            </motion.p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <motion.div variants={itemVariants} className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>Abuja, Nigeria</span>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <Link
                  href="https://linkedin.com/in/chibuikem-ilonze-7397a522a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:underline"
                >
                  <Linkedin className="mr-1 h-5 w-5" />
                </Link>
                <Link
                  href="https://github.com/CMI-James"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:underline"
                >
                  <Github className="mr-1 h-5 w-5" />
                </Link>
                <span className="mx-2">|</span>
                <Link href="/projects" className="hover:underline">
                  Portfolio
                </Link>
                <span className="mx-2">|</span>
                <Link
                  href="https://app.onlydust.com/users/CMI-James/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  OnlyDust
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div variants={itemVariants} className="flex justify-end mb-8">
            <motion.a
              href={resumeLink}
              download="Chibuikem_Ilonze_Resume.pdf"
              className="theme-light-dark-button flex items-center gap-2 px-4 py-2 rounded-md border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-5 w-5" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Work Experience Section */}
          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-brown-300 dark:border-beige/30">
              Work Experience
            </h2>

            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className={index < workExperience.length - 1 ? "mb-8" : ""}
              >
                <div className="flex flex-col sm:flex-row justify-between mb-2">
                  <div className="flex items-center">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <span className="mx-2">•</span>
                    <span>{job.company}</span>
                  </div>
                  <span className="text-brown-700 dark:text-beige/70">{job.duration}</span>
                </div>

                <motion.ul className="list-disc pl-6 space-y-2 text-brown-700 dark:text-beige/80 font-lora">
                  {job.responsibilities.map((responsibility, respIndex) => (
                    <motion.li key={respIndex} variants={listItemVariants}>
                      {responsibility}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.section>

          {/* Education and Skills Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education Section */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-brown-300 dark:border-beige/30">Education</h2>

              <div className="flex items-start">
                <div className="mr-4">
                  <motion.div
                    className="p-2 bg-brown-200 dark:bg-brown-800 rounded-md"
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </motion.div>
                </div>

                <div className="font-lora">
                  <p className="text-brown-700 dark:text-beige/70">2018 - 2024</p>
                  <h3 className="text-lg font-semibold">University of Nigeria, Nsukka</h3>
                  <p className="text-brown-700 dark:text-beige/80">Electronics and Computer Engineering</p>
                </div>
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-brown-300 dark:border-beige/30">Skills</h2>

              <motion.ul className="space-y-3 text-brown-700 dark:text-beige/80 font-lora">
                <motion.li variants={listItemVariants}>
                  <strong>Languages:</strong> HTML, CSS, JavaScript, TypeScript
                </motion.li>
                <motion.li variants={listItemVariants}>
                  <strong>Frameworks & Libraries:</strong> React, NextJs, Tailwind CSS, Framer Motion
                </motion.li>
                <motion.li variants={listItemVariants}>
                  <strong>Tools & Platforms:</strong> Git, GitHub, Vite, Firebase, Figma, Chrome DevTools, Postman
                </motion.li>
                <motion.li variants={listItemVariants}>
                  <strong>Core Skills:</strong> Responsive Design, REST API Integration, Debugging & Troubleshooting,
                  Code Reviews, Team Collaboration
                </motion.li>
              </motion.ul>
            </motion.section>
          </motion.div>
        </motion.div>
      </div>
    </Transition>
  )
}

export default Resume
