import React, { useEffect, useRef, useState } from 'react';

export interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  className = '',
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If IntersectionObserver is not supported or reduced motion preferred, reveal immediately
    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    const currentElem = elementRef.current;
    if (!currentElem) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(currentElem);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getTransformStyle = () => {
    if (isVisible) {
      return {
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1)',
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      };
    }

    let initialTransform = 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'up':
        initialTransform = 'translate3d(0, 24px, 0)';
        break;
      case 'down':
        initialTransform = 'translate3d(0, -24px, 0)';
        break;
      case 'left':
        initialTransform = 'translate3d(-24px, 0, 0)';
        break;
      case 'right':
        initialTransform = 'translate3d(24px, 0, 0)';
        break;
      case 'zoom':
        initialTransform = 'scale(0.94)';
        break;
      case 'fade':
      default:
        initialTransform = 'translate3d(0, 0, 0)';
        break;
    }

    return {
      opacity: 0,
      transform: initialTransform,
      transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      willChange: 'opacity, transform',
    };
  };

  return (
    <div ref={elementRef} style={getTransformStyle()} className={className}>
      {children}
    </div>
  );
};

