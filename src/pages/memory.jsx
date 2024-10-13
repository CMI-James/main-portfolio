import Transition from "@/components/ui/Transition";
import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Memory = () => {
  const router = useRouter();
  const { name } = router.query;
  const audioRef = useRef(null);
  const [isNavigatingToNothing, setIsNavigatingToNothing] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio playback error:", error);
      });
    }
  }, []);

  useEffect(() => {
    if (name === undefined && !isNavigatingToNothing) {
      router.replace("/memory-login");
    }
  }, [name, router, isNavigatingToNothing]);

  const [welcomeText] = useTypewriter({
    words: [` Hey ${name}, Welcome!`],
    loop: 1,
    onLoopDone: () => {
     
    },
  });

  const [followText] = useTypewriter({
    words: ["Let's head over to memory, shall we?"],
    loop: 1,
    onLoopDone: () => {
      console.log(`loop completed.`);
      setIsNavigatingToNothing(true);
      setTimeout(() => {
        router.push("/nothing"); // Navigate to /nothing after 2 seconds
      }, 2000);
    },
  });

  return (
    <Transition>
      <div className="relative px-5 md:px-10 xl:px-20 2xl:px-28 text-center flex flex-col justify-center items-center h-screen w-full">
        <audio ref={audioRef} src="/music/rain.mp3" autoPlay loop />
        <p className="text-heading lg:text-special">{welcomeText}</p>
        <p className="text-2xl">
          {followText}
          <Cursor />
        </p>
      </div>
    </Transition>
  );
};

export default Memory;
