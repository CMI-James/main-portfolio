// "use client"
// import React, { useEffect } from "react";
// import Word from "./ui/TextReveal";
// export default function Description() {
//   useEffect(() => {
//      console.log("✅ Description component mounted");
//        }, []);
//   const paragraph =
//     "I create captivating user interfaces that inspire and connect with people through development and design.";
//   return (
//     <div id="description-section" className="relative z-20 h-screen hidden-scrollbar px-5  md:px-10 xl:px-20 2xl:px-28 theme-light-dark  flex w-full items-center justify-center space-x-20">
//       <Word paragraph={paragraph} />
      
//     </div>

//   );
// }

"use client"
import React, { useEffect } from "react";
import Word from "./ui/TextReveal";
import Section from "./layout/section";
export default function Description() {
  useEffect(() => {
    console.log("✅ Description component mounted");
  }, []);
  
  const paragraph =
    "I create captivating user interfaces that inspire and connect with people through development and design.";
  return (
    <Section
      id="description-section"
      wrapperClassName="relative !py-0 z-20 h-screen hidden-scrollbar theme-light-dark  flex w-full items-center justify-center space-x-20"
    >
      <Word paragraph={paragraph} />
    </Section>
  );
}

