import React from "react";
import Word from "../ui/TextReveal"

export default function Hero2() {
  const paragraph=
    "I create captivating user interfaces that inspire and connect with people through development and design.";
  return (
    <div className="relative z-20 h-screen px-5  md:px-10 xl:px-20 2xl:px-28 bg-brown-1000 text-beige  flex w-full items-center justify-center space-x-20">
      <Word paragraph={paragraph}/>
    </div>
  );
}
