import { useState, useEffect } from "react";
import Transition from "../common/Transition";

const LoadingScreen = () => {
  const [percentage, setPercentage] = useState(0);
  const [intervalTime, setIntervalTime] = useState(100); // Start with a slower interval

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, intervalTime);

    // Adjust speed dynamically as percentage increases
    if (percentage < 50) {
      setIntervalTime(100 - percentage); // Decrease interval time gradually
    } else if (percentage >= 50 && percentage < 80) {
      setIntervalTime(50 - (percentage - 50)); // Increase speed more significantly
    } else {
      setIntervalTime(20); // Final burst of speed
    }

    return () => clearInterval(interval);
  }, [percentage, intervalTime]);

  return (
    <Transition>
      <div className="fixed inset-0 bg-brown-1000 text-beige flex items-center justify-center">
        <div className="absolute bottom-2 right-2 md:bottom-3 md:right-10">
          <span className="text-heading font-bold tracking-wider">
            {percentage}%
          </span>
        </div>
      </div>
    </Transition>
  );
};

export default LoadingScreen;
