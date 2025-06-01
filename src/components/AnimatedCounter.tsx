
import { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number; // in milliseconds
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter = ({ end, duration = 2000, suffix = "", prefix = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const isInViewport = useRef(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewport.current = entry.isIntersecting;
        if (entry.isIntersecting && !hasAnimated.current) {
          startCounting();
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    let startTime: number | null = null;
    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(percentage * end);
      
      setCount(currentCount);

      if (percentage < 1) {
        requestAnimationFrame(countUp);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(countUp);
  };

  return (
    <div ref={countRef} className="inline-block">
      {prefix}{count}{suffix}
    </div>
  );
};

export default AnimatedCounter;
