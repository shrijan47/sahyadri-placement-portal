import React, { useEffect, useRef, useState } from 'react';

export interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  start = 0,
  duration = 1200,
  decimals,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [currentValue, setCurrentValue] = useState<number>(start);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef<boolean>(false);

  // Automatically infer decimal places if not explicitly provided
  const numDecimals =
    decimals !== undefined
      ? decimals
      : end.toString().includes('.')
      ? end.toString().split('.')[1].length
      : 0;

  useEffect(() => {
    // If reduced motion is requested, display final value immediately
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setCurrentValue(end);
      return;
    }

    const currentElem = elementRef.current;
    if (!currentElem) return;

    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const startTime = performance.now();
      const change = end - start;

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, Math.max(0, elapsed / duration));
        // Ease-out cubic curve: 1 - (1 - t)^3
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const nextValue = start + change * easeOut;

        setCurrentValue(nextValue);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCurrentValue(end);
        }
      };

      requestAnimationFrame(step);
    };

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      startAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(currentElem);

    return () => {
      observer.disconnect();
    };
  }, [end, start, duration]);

  const formatted = currentValue.toFixed(numDecimals);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

