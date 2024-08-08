import Transition from "@/components/PageTransition/Transition";
import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";

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
  
  if (isRedirecting) {
    return null; // Optionally, you can show a loading spinner or message while redirecting
  }

  return (
    <Transition>
      <div className="relative px-5 md:px-10 xl:px-20 2xl:px-28 text-center flex justify-center items-center h-screen w-full">
        <audio ref={audioRef} src="/music/rain.mp3" autoPlay loop />
        <p className="text-heading lg:text-special">
          Hey {name}, <br className="lg:hidden" /> Welcome!
        </p>
      </div>
    </Transition>
  );
};

export default Memory;
