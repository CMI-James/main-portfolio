import React from "react";
export default function Hero() {
  const textArray = ["HEY I'M JAMES", "HEY I'M JAMES", "HEY I'M JAMES"];
  return (
    <section className="relative h-[90vh] hero-clip">
      <div className="fixed top-0 h-[90vh] w-full">
        <div className="sticky text-center  font-main top-0 h-[80vh] pt-[6rem]  flex flex-col items-center justify-center text-4xl">
        {textArray.map((text, index) => (
            <p
              key={index}
              className={`z-10 leading-[5rem] text-title sm:leading-[6rem] lg:leading-[10rem] font-extrabold text-brown-1000 ${
                index === 1 ? "transparent-text" : ""
              }`}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
