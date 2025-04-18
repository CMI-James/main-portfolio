"use client";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Card = ({
  i = 0,
  title = "",
  description = "",
  src = "placeholder.jpg",
  link = "#",
  color = { light: "#ffffff", dark: "#000000" },
  progress = { get: () => 0 }, // Mocked for safety
  range = [0, 1],
  targetScale = 1,
}) => {
  const container = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Check for dark mode on component mount and when theme changes
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Initial check
    checkDarkMode();

    // Set up a MutationObserver to watch for class changes on the html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  // Get the appropriate color based on the current theme
  const currentColor = isDarkMode ? color.dark : color.light;

  return (
    <div
      ref={container}
      className=" h-screen flex flex-col items-start justify-start sticky top-0"
    >
      <a
        className="text-xs  cursor-pointer"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <motion.div
          style={{
            scale,
            top: `calc(${i * 10}px)`,
          }}
          className="flex flex-col  relative h-[70vh] md:h-[65vh] xl:h-[85vh] 2xl:h-[70vh] w-full rounded-xl md:rounded-2xl xl:rounded-3xl p-4 xl:p-8 origin-top mt-16 transition-colors duration-700"
          animate={{
            backgroundColor: currentColor,
          }}
          transition={{
            backgroundColor: { duration: 0.7 },
          }}
        >
          <h2 className="text-center m-0 text-3xl text-brown-1000 dark:text-beige duration-700 transition-colors">
            {title}
          </h2>
          <div className="flex flex-col xl:flex-row h-full mt-6 gap-8">
            <div className="relative xl:w-[80%] h-[40%] md:h-[65%] xl:h-full rounded-sm overflow-hidden">
              <motion.div
                className="w-full h-full rounded-3xl"
                style={{ scale: imageScale }}
              >
                <Image
                  fill
                  src={`/images/projects/${src}`}
                  alt={title}
                  className="object-cover rounded-xl md:rounded-2xl xl:rounded-3xl"
                />
              </motion.div>
            </div>
            <div className="xl:w-[20%] relative top-[5%] md:top-[10%] text-brown-1000 dark:text-beige duration-700 transition-colors font-lora">
              <p className="text-base first-letter:text-3xl first-letter:font-serif ">
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </a>
    </div>
  );
};

export default Card;
