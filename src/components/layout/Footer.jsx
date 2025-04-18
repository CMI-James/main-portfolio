import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Footer() {
  const year = new Date().getFullYear();
  const [timer, setTimer] = useState(null);

  const router = useRouter();

  const handleMouseDown = () => {
    const newTimer = setTimeout(() => {
      router.push("/memory/login");
    }, 1500);
    setTimer(newTimer);
  };

  const handleMouseUp = () => {
    clearTimeout(timer);
    setTimer(null);
    router.push("/nothing");
  };

  return (
    <div
      className="relative h-[20vh] hidden-scrollbar theme-light-dark"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[30vh] w-full">
        <div className="  px-2 h-full w-full flex flex-col justify-between">
          <div className="flex shrink-0 gap-20">
            {/* Add any additional elements here if necessary */}
          </div>
          <div className="flex justify-between items-end">
            <h1
              className="text-[14vw] xl:text-[10vw] leading-[0.8] cursor-pointer"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              Griezzman
            </h1>
            <p className=" text-sm text-right">Chibuikem Ilonze ©{year} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
