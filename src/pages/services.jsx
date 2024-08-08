import Transition from "@/components/PageTransition/Transition";
import React from "react";

const Services = () => {
  return (
    <Transition>
      <div className="flex justify-center flex-col items-center h-[300vh] w-full">
        <p className="text-title">Services</p>
        <div className="h-screen w-full bg-black"></div>
      </div>
      </Transition>
  );
};

export default Services;
