import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Nav from "./nav/nav";

const Navbar = ({ controls, section }) => {
  const [isActive, setIsActive] = useState(true);
  const [isReversed, setIsReversed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [router.pathname]);

  const buttonClass =
    section % 2 === 0
      ? "bg-brown-1000 border-brown-1000 text-beige hover:border-brown-1000 hover:bg-beige hover:text-brown-1000"
      : "bg-beige border-beige text-brown-1000 hover:border-beige hover:bg-brown-1000 hover:text-beige";

  const navbarClass = section % 2 == 0 ? "bg-beige" : "bg-brown-1000";
  const underlineClass = section % 2 == 0 ? "bg-brown-1000" : "bg-beige"
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

  return (
    <motion.div
      className={`fixed top-0 z-[1000] ${navbarClass} py-2 px-4 md:px-8 xl:px-12 w-full flex justify-between items-center`}
      animate={controls}
    >
      <div>
        <p className="text-2xl font-extrabold">
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

        <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
        <ul className="hidden sm:flex gap-10 items-center justify-between">
          <li className="group flex items-center space-x-2">
            <Link href="/about" scroll={false} className="relative">
              <span>About</span>
              <span
                className={`absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full ${underlineClass} duration-300 ease-in-out group-hover:w-full`}
              ></span>
            </Link>
          </li>
          <li className="group flex items-center space-x-2">
            <Link href="/services" scroll={false} className="relative">
              <span>Services</span>
              <span
                className={`absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full ${underlineClass} duration-300 ease-in-out group-hover:w-full`}
              ></span>
            </Link>
          </li>
          <li className="group flex items-center space-x-2">
            <Link href="/projects" scroll={false} className="relative">
              <span>Projects</span>
              <span
                className={`absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full ${underlineClass} duration-300 ease-in-out group-hover:w-full`}
              ></span>
            </Link>
          </li>
          <li>
            <button
              className={`rounded-lg border-[1px] py-1 px-2 transition-colors duration-500 ${buttonClass}`}
            >
              <Link href="/contact" scroll={false}>
                Contact me
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
