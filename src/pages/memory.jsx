import Transition from "@/components/PageTransition/Transition";
import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

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
    if (name === undefined && !isRedirecting) {
      setIsRedirecting(true);
      // Redirect to /memory-login if name is not present in the query
      router.replace("/memory-login");
    }
  }, [name, router, isRedirecting]);

  const [followText] = useTypewriter({
    words: ["Let's head over to memory, shall we?"],
    loop: 1,
    onLoopDone: () => {
      console.log(`loop completed.`);
      setTimeout(() => {
        router.push("/nothing"); // Navigate to /nothing after 2 seconds
      }, 2000);
    },
  });

  if (isRedirecting || name === undefined) {
    return null; // Optionally, you can show a loading spinner or message while redirecting
  }

  return (
    <Transition>
      <div className="relative px-5 md:px-10 xl:px-20 2xl:px-28 text-center flex flex-col justify-center items-center h-screen w-full">
        <audio ref={audioRef} src="/music/rain.mp3" autoPlay loop />
        <p className="text-heading lg:text-special">
          Hey {name}, <br className="lg:hidden" /> Welcome!
        </p>
        <p className="text-2xl">{followText}<Cursor /></p>
      </div>
    </Transition>
  );
};

export default Memory;
