// import React, { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import './Loader.css';

// const Loader = ({ setLoading }) => {
//   const loaderRef = useRef(null);
//   const loadingScreenRef = useRef(null);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // Number counter animation
//     gsap.to({}, {
//       duration: 5,
//       onUpdate: () => {
//         setCount(prevCount => Math.min(prevCount + 1, 100));
//       },
//       onComplete: () => {
//         // End loading after animation
//         setLoading(false);
//       }
//     });

//     // Loading bar animation
//     gsap.fromTo(loaderRef.current, {
//       width: '0%'
//     }, {
//       width: '100%',
//       duration: 5,
//       ease: 'power2.inOut'
//     });

//     // Rotate and zoom out animation
//     gsap.to(loaderRef.current, {
//       rotate: 45,
//       scale: 40,
//       duration: 1,
//       delay: 5,
//       ease: 'power2.inOut'
//     });

//     gsap.to(loadingScreenRef.current, {
//       opacity: 0,
//       duration: 0.5,
//       delay: 5,
//       ease: 'power1.inOut',
//       onComplete: () => {
//         // Hide the loader screen after animation
//         loadingScreenRef.current.style.display = 'none';
//       }
//     });
//   }, [setLoading]);

//   return (
//     <div ref={loadingScreenRef} className="loading-screen">
//       <div className="counter">{count}</div>
//       <div ref={loaderRef} className="loader"></div>
//     </div>
//   );
// };

// export default Loader;
