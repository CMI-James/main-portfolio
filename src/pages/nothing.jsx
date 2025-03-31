import Transition from "@/components/common/Transition";
import React from "react";


const Nothing = () => {
  return (
    <Transition>
      <div className="flex justify-center items-center h-screen w-full theme-dark-light">
        <p className="text-works-title">Nothing to See here, You missed it!</p>
      </div>
    </Transition>
  );
};

export default Nothing;
