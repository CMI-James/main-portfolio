import Transition from "@/components/ui/Transition";
import { useMemory } from "@/context/MemoryContext";
import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ImageScroll from "./components/imageScroll";

const Memory = () => {
  const router = useRouter();
  const { name } = useMemory();
  const audioRef = useRef(null);
  const [isNavigatingToNothing, setIsNavigatingToNothing] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Play background audio
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio playback error:", error);
      });
    }
  }, []);

  useEffect(() => {
    // Redirect if no name is provided
    if (!name && !isNavigatingToNothing) {
      router.replace("/memory/login");
    }
  }, [name, router, isNavigatingToNothing]);

  const [welcomeText] = useTypewriter({
    words: [` Hey ${name}, Welcome!`],
    loop: 1,
    onLoopDone: () => {
      // Start scrolling to the next section
      setIsScrolling(true);
      setTimeout(() => {
        // Smooth scrolling over 20 seconds
        const scrollDuration = 10000; // 20 seconds in milliseconds
        const scrollStart = window.scrollY;
        const scrollEnd = document.body.scrollHeight;
        const scrollDistance = scrollEnd - scrollStart;

        const startTime = performance.now();

        const smoothScroll = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / scrollDuration, 1);
          const newScrollY = scrollStart + scrollDistance * progress;

          window.scrollTo(0, newScrollY);

          if (progress < 1) {
            requestAnimationFrame(smoothScroll);
          } else {
            setIsScrolling(false);
          }
        };

        requestAnimationFrame(smoothScroll);
      }, 1000);
    },
  });

  const [followText] = useTypewriter({
    words: ["Let's head over to memory, shall we?"],
    loop: 1,
    onLoopDone: () => {
      console.log(`loop completed.`);
      setTimeout(() => {
        setIsNavigatingToNothing(true);
        // router.push("/nothing"); // Navigate to /nothing after scrolling
      }, 11000);
    },
  });

  return (
    <Transition > 
      {/* Section 1 */}
      <div className="relative px-5 md:px-10 xl:px-20 2xl:px-28 text-center flex flex-col justify-center items-center h-screen w-full">
        {/* <audio ref={audioRef} src="/music/rain.mp3" autoPlay loop /> */}
        <p className="text-heading lg:text-special">
          {welcomeText} <Cursor />
        </p>
      </div>

      {/* ImageScroll Section */}
      <ImageScroll />

      {/* Section 2 */}
      <div className="relative px-5 md:px-10 xl:px-20 2xl:px-28 text-center flex flex-col justify-center items-center h-screen w-full">
        <p className="text-2xl">
          {followText}
          <Cursor />
        </p>
      </div>
    </Transition>
  );
};

export default Memory;
