import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { slide, scale } from "./anim";

import { useRouter } from "next/router";
import { getSectionClasses } from "@/utils/sectionUtils";
import useScrollSection from "@/hooks/useScrollSection";

export default function NavLink({ data }) {
  const { title, href, index } = data;
  const [isActive, setIsActive] = useState(false);
  const section = useScrollSection();
  const { dotColor } = getSectionClasses(section);
  const router = useRouter();

  useEffect(() => {
    setIsActive(href === router.pathname);
  }, [href, router.pathname]);

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={`w-2 h-2 rounded-[50%] absolute -left-7 ${dotColor}`}
      ></motion.div>
      <Link className={isActive ? "font-bold" : ""} href={href} passHref>
        {title}
      </Link>
    </motion.div>
  );
}
