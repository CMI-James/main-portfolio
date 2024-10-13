import Transition from "@/components/ui/Transition";
import React from "react";


const Nothing = () => {
  return (
    <Transition>
      <div className="flex justify-center items-center h-screen w-full">
        <p className="text-works-title">Nothing to See here, You missed it!</p>
      </div>
    </Transition>
  );
};

export default Nothing;
