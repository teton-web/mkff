"use client";

import React from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export function StatCounter({ end, suffix = "", duration = 2 }: StatCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // Avoid synchronous setState inside effect per React rules
      const id = setTimeout(() => setCount(end), 0);
      return () => clearTimeout(id);
    }

    let start = 0;
    const increment = Math.ceil(end / (duration * 60));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="stat-number tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
