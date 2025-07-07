'use client';

import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  targetNumber: number;
  duration?: number; // total duration in ms
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  targetNumber,
  duration = 200,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / targetNumber), 10);
    const interval = setInterval(() => {
      start += 1000;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [targetNumber, duration]);

  return (
    <>
      {count.toLocaleString()}+
    </>
  );
};

export default AnimatedCounter;