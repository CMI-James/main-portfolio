import React from "react";
import { FiTriangle } from "react-icons/fi";
export default function Hero1() {
  return (
    <div
      className="relative h-[90vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-0 h-[90vh] w-full">
        <div className="sticky text-center z-10 font-main top-0 h-[80vh] pt-[6rem]  flex flex-col items-center justify-center text-4xl">
          <p className="text-title  z-10 leading-[5rem] sm:leading-[6rem] font-extrabold text-brown-1000">
            HEY I'M JAMES
          </p>
          <br />
          <p className=" z-10 transparent-text text-title leading-[5rem] sm:leading-[6rem] text-brown-1000  font-extrabold">
            HEY I'M JAMES
          </p>
          <br />
          <p className="z-10 text-title leading-[5rem] sm:leading-[6rem] text-brown-1000 font-extrabold ">
            HEY I'M JAMES
          </p>
        </div>
      </div>
    </div>
  );
}
