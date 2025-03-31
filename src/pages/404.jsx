import Transition from "@/components/common/Transition";
import React from "react";

const NotFound = () => {
  return (
    <Transition>
      <div className="flex flex-col px-5  md:px-10 xl:px-20 2xl:px-28 text-center justify-center items-center h-screen w-full">
        <h1 className="text-special mb-4">
          Where are you navigating to, Dawg?
        </h1>
      </div>
    </Transition>
  );
};

export default NotFound;
