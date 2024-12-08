"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";

const allImages = [
    "1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG", "6.JPG",
    "7.JPG", "8.JPG", "9.JPG", "10.JPG", "11.JPG", "12.JPG",
    "13.JPG", "14.JPG", "15.JPG", "16.JPG", "17.JPG", "18.JPG",
    "19.JPG", "20.JPG", "21.JPG", "22.JPG", "23.JPG", "24.JPG",
    "25.JPG", "26.JPG", "27.JPG", "28.JPG", "29.JPG", "30.JPG",
    "31.JPG", "32.JPG", "33.JPG", "34.JPG", "35.JPG", "36.JPG",
    "37.JPG", "38.JPG", "39.JPG", "40.JPG", "41.JPG", "42.JPG",
    "43.JPG", "44.JPG", "45.JPG", "46.JPG", "47.JPG",
  ];
  
export default function ImageScroll() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  // Randomly select 12 images
  const shuffledImages = allImages.sort(() => 0.5 - Math.random()).slice(0, 12);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="m-0">
      <div className="h-[20vh]"></div>
      <div
        ref={gallery}
        className="h-[175vh] relative bg-gray-800 flex gap-[2vw] p-[2vw] box-border overflow-hidden"
      >
        <Column images={[shuffledImages[0], shuffledImages[1], shuffledImages[2]]} y={y} />
        <Column images={[shuffledImages[3], shuffledImages[4], shuffledImages[5]]} y={y2} />
        <Column images={[shuffledImages[6], shuffledImages[7], shuffledImages[8]]} y={y3} />
        <Column images={[shuffledImages[9], shuffledImages[10], shuffledImages[11]]} y={y4} />
      </div>
      <div className="h-[20vh]"></div>
    </main>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div
      className="relative h-full w-1/4 min-w-[250px] flex flex-col gap-[2vw] column"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="h-full w-full relative rounded-[1vw] overflow-hidden"
        >
          <Image
            src={`/auto-scroll-images/${src}`}
            alt="image"
            fill
            className="object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
};
