// src/components/SmoothScrollWrapper.jsx
import { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScrollWrapper = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <div>{children}</div>;
};

export default SmoothScrollWrapper;
