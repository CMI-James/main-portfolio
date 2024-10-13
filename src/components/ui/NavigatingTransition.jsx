// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Transition from "./Transition"; // Import your existing Transition component

// export default function NavigatingTransition({ to, children, backgroundColor }) {
//   const navigate = useNavigate();

//   const handleClick = (e) => {
//     e.preventDefault(); // Prevent default link behavior

//     // Trigger the transition
//     const animationDuration = 500; // Duration in milliseconds

//     // Set a timeout to navigate after the transition
//     setTimeout(() => {
//       window.location.href = to; // Redirect to the external URL
//     }, animationDuration);
//   };

//   return (
//     <div onClick={handleClick}>
//       <Transition backgroundColor={backgroundColor}>
//         {children}
//       </Transition>
//     </div>
//   );
// }
