"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { menuSlide } from "./anim";
import NavLink from "./link";
import Curve from "./curve";
import NavFooter from "./footer";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Resume", href: "/resume" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
];

export default function Nav({ currentTheme = "theme-dark-light" }) {
  const router = useRouter();
  const [selectedIndicator, setSelectedIndicator] = useState(router.pathname);

  // Determine the reverse theme for Nav
  const navTheme =
    currentTheme === "theme-dark-light"
      ? "theme-light-dark"
      : "theme-dark-light";

  useEffect(() => {
    setSelectedIndicator(router.pathname);
  }, [router.pathname]);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={`h-screen w-[80%] sm:w-[50%] md:w-[40%] xl:w-[25%] fixed right-0 top-0  ${navTheme}`}
    >
      <div className="box-border h-screen flex justify-between pt-[5rem] pb-[5rem] items-center flex-col">
        <div
          onMouseLeave={() => setSelectedIndicator(router.pathname)}
          className="flex flex-col text-5xl gap-8"
        >
          {navItems.map((data, index) => (
            <NavLink
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>
        <NavFooter />
      </div>
      <Curve />
    </motion.div>
  );
}
