"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = ({ themeClass, filteredLinks, showContact }) => {
  // Determine button theme class based on navbar theme
  const buttonThemeClass =
    themeClass === "theme-dark-light"
      ? "theme-light-dark-button"
      : "theme-dark-light-button";

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div
      className={`fixed top-0 z-30 ${themeClass} py-2 px-4 md:px-8 xl:px-12 w-full flex justify-between items-center`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <p className="text-2xl font-extrabold group">
          <Link href="/" scroll={false} className="relative">
           <span> CMI</span>
            <span
              className={`absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-brown-1000 dark:bg-beige duration-700 group-hover:w-full`}
            ></span>
          </Link>
        </p>
      </div>
      <div>
        {/* Removed MenuBar from here */}

        <ul className="hidden sm:flex gap-10 md:gap-2 lg:gap-5 xl:gap-10 items-center justify-between">
          {filteredLinks.map((link) => (
            <li key={link.href} className="group flex items-center">
              <Link href={link.href} scroll={false} className="relative">
                <span>{link.label}</span>
                <span
                  className={`absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-brown-1000 dark:bg-beige duration-700 group-hover:w-full`}
                ></span>
              </Link>
            </li>
          ))}

          {showContact && (
            <li>
              <button
                className={`rounded-lg border py-1 px-2 ${buttonThemeClass}`}
              >
                <Link href="/contact" scroll={false}>
                  Contact me
                </Link>
              </button>
            </li>
          )}
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
