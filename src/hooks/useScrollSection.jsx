import { useState, useEffect, useCallback } from "react";

const useScrollSection = () => {
  const [section, setSection] = useState(0);

  const updateSection = useCallback(() => {
    const scrollY = window.scrollY;
    const sectionHeight = window.innerHeight;
    const transitionPoint = sectionHeight * 0.3;
    const newSection = Math.floor((scrollY + transitionPoint) / sectionHeight);
    setSection(newSection);
  }, []);

  useEffect(() => {
    updateSection(); // Initialize section on mount
    window.addEventListener("scroll", updateSection);
    return () => window.removeEventListener("scroll", updateSection);
  }, [updateSection]);

  return section;
};

export default useScrollSection;
