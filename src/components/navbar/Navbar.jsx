import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Nav from "./ui/nav";
import useScrollSection from "@/hooks/useScrollSection";
import { getSectionClasses } from "@/utils/sectionUtils";

const Navbar = ({ controls }) => {
  const [isActive, setIsActive] = useState(true);
  const [isReversed, setIsReversed] = useState(false);
  const [filteredLinks, setFilteredLinks] = useState([]);
  const [showContact, setShowContact] = useState(true);
  const router = useRouter();
  const section = useScrollSection();
  const { buttonClass, oppositeColor, mainColor } = getSectionClasses(section);
  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [router.pathname]);

  const navbarClass = section % 2 == 0 ? "bg-beige" : "bg-brown-1000";
  const underlineClass = section % 2 == 0 ? "bg-brown-1000" : "bg-beige";
  console.log("testers", navbarClass, underlineClass);
  const harmburgerClass =
    section % 2 === 0
      ? isReversed
        ? "bg-beige"
        : "bg-brown-1000"
      : isReversed
      ? "bg-brown-1000"
      : "bg-beige";

  const burgerLineColor =
    section % 2 === 0
      ? isReversed
        ? "#0f0500"
        : "#f5f5dc"
      : isReversed
      ? "#f5f5dc"
      : "#0f0500";

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--burger-line-color",
      burgerLineColor
    );
  }, [burgerLineColor]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const navLinks = [
        { href: "/about", label: "About" },
        { href: "/skills", label: "Skills" },
        { href: "/projects", label: "Projects" },
      ];
      setFilteredLinks(navLinks.filter((link) => link.href !== router.pathname));
      setShowContact(router.pathname !== "/contact");
    }, 100);

    return () => clearTimeout(timer);
  }, [router.pathname]);
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
    exit: { opacity: 0, x: "100%", transition: { duration: 1, ease: "easeInOut" } },
  };
  return (
    <motion.div
      className={`fixed top-0 z-[1000] theme-dark-light py-2 px-4 md:px-8 xl:px-12 w-full flex justify-between items-center`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <p className="text-2xl font-extrabold z-[10000]">
          <Link href="/" scroll={false}>
            CMI
          </Link>
        </p>
      </div>
      <div>
        <div className="relative z-[100] flex sm:hidden">
          <div className="absolute -top-4 right-0">
            <div
              onClick={() => {
                setIsActive(!isActive);
                setIsReversed(!isReversed);
              }}
              className={`z-50 w-8 h-8 rounded-[50%] cursor-pointer flex items-center justify-center ${harmburgerClass}`}
            >
              <div
                className={`burger justify-center items-center relative flex ${
                  isActive ? "burgerActive" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex sm:hidden">
          {" "}
          <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
        </div>

        <ul className="hidden sm:flex gap-10 items-center justify-between z-[100000] ">
          {filteredLinks.map((link) => (
            <li key={link.href} className="group flex items-center space-x-2">
              <Link href={link.href} scroll={false} className="relative">
                <span>{link.label}</span>
                <span
                  className={`absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full ${underlineClass} duration-300 ease-in-out group-hover:w-full`}
                ></span>
              </Link>
            </li>
          ))}

          {showContact && (
            <li>
              <button className={`rounded-lg border py-1 px-2 ${buttonClass}`}>
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
