import Transition from "@/components/PageTransition/Transition";
import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";
import { Typewriter } from 'react-simple-typewriter';

const Memory = () => {
  const router = useRouter();
  const { name } = router.query;
  const audioRef = useRef(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio playback error:", error);
      });
    }
  }, []);

  useEffect(() => {
    if (name === undefined) {
      // Redirect to /memory-login if name is not present in the query
      router.replace("/memory-login");
      setIsRedirecting(true);
    }
  }, [name, router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/nothing");
    }, 5000); // Navigate after 5 seconds

    return () => clearTimeout(timer); // Cleanup timer if component unmounts
  }, [router]);

  if (isRedirecting) {
    return null; // Optionally, you can show a loading spinner or message while redirecting
  }

  return (
    <Transition>
      <div className="relative px-5 md:px-10 xl:px-20 2xl:px-28 text-center flex flex-col justify-center items-center h-screen w-full">
        <audio ref={audioRef} src="/music/rain.mp3" autoPlay loop />
        <p className="text-heading lg:text-special">
          Hey {name}, <br className="lg:hidden" /> Welcome!
        </p>
        <p className="text-2xl">
          <Typewriter
            words={["Let's head over to memory, shall we?"]}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>
    </Transition>
  );
};

export default Memory;
