"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: string; // e.g. "~500", "92", "~$28K"
  className?: string;
}

function parseStatValue(value: string): { prefix: string; num: number; suffix: string } {
  const match = value.match(/^([~$]*)(\d+)([K+%]*)$/i);
  if (!match) return { prefix: "", num: 0, suffix: "" };
  const multiplier = match[3]?.toUpperCase() === "K" ? 1000 : 1;
  return {
    prefix: match[1],
    num: parseInt(match[2]) * (multiplier > 1 ? 1 : 1),
    suffix: match[3],
  };
}

export default function StatCounter({ value, className = "" }: StatCounterProps) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const { prefix, num, suffix } = parseStatValue(value);
          if (num === 0) {
            setDisplay(value);
            return;
          }

          const duration = 1200;
          const startTime = performance.now();

          function tick(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * num);
            setDisplay(`${prefix}${current}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
          }

          setDisplay(`${prefix}0${suffix}`);
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className={className}>
      {display}
    </div>
  );
}
